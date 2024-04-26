import feedparser
import git
import os
from bs4 import BeautifulSoup
from datetime import datetime
import requests

# 벨로그 RSS 피드 URL
rss_url = 'https://api.velog.io/rss/@l11040'

# 깃허브 레포지토리 경로
repo_path = '.'

# 'velog-posts' 폴더 경로
posts_dir = os.path.join(repo_path, 'src/posts')

# 'velog-posts' 폴더가 없다면 생성
if not os.path.exists(posts_dir):
    os.makedirs(posts_dir)

# 레포지토리 로드
repo = git.Repo(repo_path)

# RSS 피드 파싱
feed = feedparser.parse(rss_url)

# 각 글을 파일로 저장하고 커밋
for entry in feed.entries:
    current_date = datetime.now().strftime('%Y-%m-%d')
    # 파일 이름에서 유효하지 않은 문자 제거 또는 대체
    file_name = entry.title
    file_name = file_name.replace('/', '-')  # 슬래시를 대시로 대체
    file_name = file_name.replace('\\', '-')  # 백슬래시를 대시로 대체
    # 필요에 따라 추가 문자 대체
    file_name += '.md'
    file_path = os.path.join(posts_dir, file_name)

    post_link = entry.link
    response = requests.get(post_link)
    html_content = response.text

    # 파일이 이미 존재하지 않으면 생성
    if not os.path.exists(file_path):
        soup = BeautifulSoup(html_content, 'html.parser')
        tag_links = soup.find_all('a', href=lambda x: x and '/tags/' in x)
        tags = [link.text.strip() for link in tag_links]

        markdown_content = f'''---
title: {entry.title}
tags:
{''.join([f'  - {tag}\n' for tag in tags])}
date: {current_date}
---
{entry.description}
'''

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(markdown_content) 

        # 깃허브 커밋
        repo.git.add(file_path)
        repo.git.commit('-m', f'Add post: {entry.title}')

# 변경 사항을 깃허브에 푸시
repo.git.push()