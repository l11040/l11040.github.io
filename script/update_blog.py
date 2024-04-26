import feedparser
import git
import os
from bs4 import BeautifulSoup
from datetime import datetime

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

# 현재 날짜 정보
current_date = datetime.now().strftime('%Y-%m-%d')

# 각 글을 파일로 저장하고 커밋
for entry in feed.entries:
    # 파일 이름에서 유효하지 않은 문자 제거 또는 대체
    file_name = entry.title
    file_name = file_name.replace('/', '-')  # 슬래시를 대시로 대체
    file_name = file_name.replace('\\', '-')  # 백슬래시를 대시로 대체
    # 필요에 따라 추가 문자 대체
    file_name += '.md'
    file_path = os.path.join(posts_dir, file_name)

    # 파일이 이미 존재하지 않으면 생성
    if not os.path.exists(file_path):
        # 본문 내용을 HTML로 파싱하여 태그를 추출
        soup = BeautifulSoup(entry.description, 'html.parser')
        tags = soup.find_all('a')  # <a> 태그를 가져옴
        tag_list = [tag.text.strip() for tag in tags if '/tags/' in tag.get('href')]  # href 속성에 '/tags/'가 포함된 태그만 추출

        # 마크다운 파일 내용 작성
        markdown_content = f'''---
title: {entry.title}
tags:
'''

        for tag in tag_list:
            markdown_content += f'  - {tag}\n'

        markdown_content += f'''author: [작성자 이름]
date: {current_date}
description: 해당 마크다운 파일에 대한 정보를 포함합니다.
---

{entry.description}
'''

        # 마크다운 파일 생성
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(markdown_content)

        # 깃허브 커밋
        repo.git.add(file_path)
        repo.git.commit('-m', f'Add post: {entry.title}')

# 변경 사항을 깃허브에 푸시
repo.git.push()