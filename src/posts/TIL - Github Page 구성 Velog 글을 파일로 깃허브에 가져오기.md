---
title: TIL - Github Page 구성 Velog 글을 파일로 깃허브에 가져오기
tags:
  - React
  - github
  - github action
  - github page
  - tailwindCSS

date: 2024-04-26
---
<h1 id="✅-할일">✅ 할일</h1>
<ul>
<li><input disabled="" type="checkbox" /> 내용</li>
</ul>
<hr />
<h1 id="📄-내용">📄 내용</h1>
<h2 id="→-velog-글-md파일-깃허브-블로그로-불러오기">→ Velog 글 Md파일 깃허브 블로그로 불러오기</h2>
<h3 id="⇒-세팅법">⇒ 세팅법</h3>
<p><a href="https://github.com/rimgosu/velog">https://github.com/rimgosu/velog</a></p>
<h3 id="⇒-추가-설정">⇒ 추가 설정</h3>
<ul>
<li><code>Workflow permissions</code>에서 <code>Read and write permissions</code>를 체크해야한다.
<img alt="" src="https://velog.velcdn.com/images/l11040/post/9f9ecdd4-8c9d-4189-8dbc-22cc65a7d69b/image.png" /></li>
</ul>
<h2 id="→-velog에서-파싱을-통해-다른-정보도-가져오기">→ Velog에서 파싱을 통해 다른 정보도 가져오기</h2>
<ul>
<li>현재 상태는 태그를 가져오지 못함</li>
<li>태그를 가져올 수 있도록 link를 통해 파싱을 실행</li>
</ul>
<h3 id="⇒-파이썬-태그-파싱-및-날짜-입력">⇒ 파이썬 태그 파싱 및 날짜 입력</h3>
<pre><code class="language-jsx">import feedparser
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
repo.git.push()</code></pre>
<h3 id="⇒github-action-수정">⇒Github Action 수정</h3>
<pre><code class="language-jsx">name: Update Blog Posts

on:
  push:
    branches:
      - main # 또는 워크플로우를 트리거하고 싶은 브랜치 이름
  schedule:
    - cron: &quot;0 13 * * *&quot;

jobs:
  update_blog:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Push changes
        run: |
          git config --global user.name 'github-actions[bot]'
          git config --global user.email 'github-actions[bot]@users.noreply.github.com'
          git push https://${{ secrets.GH_PAT }}@github.com/l11040/l11040.github.io.git

      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: &quot;3.x&quot;

      - name: Install dependencies
        run: |
          sudo apt-get update
          sudo apt-get install python3-pip -y
          pip3 install feedparser gitpython beautifulsoup4 requests

      - name: Run script
        run: python script/update_blog.py
</code></pre>
<ul>
<li><code>cron: &quot;0 13 * * *&quot;</code> : 한국시간 오후 10시에 스케줄이 돌아가도록 설정</li>
<li>필요 패키지 추가 다운로드</li>
</ul>
<h2 id="→-메뉴-컴포넌트-추가">→ 메뉴 컴포넌트 추가</h2>
<p><img alt="" src="https://velog.velcdn.com/images/l11040/post/d61bb844-24eb-4ced-b79c-bc7212f8b6b2/image.png" />
<img alt="" src="https://velog.velcdn.com/images/l11040/post/473f6fff-315d-4bc9-8212-6394f2c831ab/image.png" />
<img alt="" src="https://velog.velcdn.com/images/l11040/post/87869cd8-e703-409d-9212-3a2579741020/image.png" /></p>
<ul>
<li>반응형으로 추가</li>
<li>화면 크기 모바일에서는 하단 네비게이션으로 이동</li>
</ul>
<h2 id="→-폴더-구조-개선">→ 폴더 구조 개선</h2>
<p><a href="https://github.com/l11040/l11040.github.io/pull/1">https://github.com/l11040/l11040.github.io/pull/1</a></p>
<hr />
<h1 id="💫troubleshooting">💫Troubleshooting</h1>
<hr />
<h1 id="📜-내용-정리">📜 내용 정리</h1>
<p><img alt="" src="https://velog.velcdn.com/images/l11040/post/4d208462-4a07-44fb-8de0-6c9538ad0740/image.png" /></p>
<hr />
<h1 id="🔗-참조">🔗 참조</h1>
<hr />
<h1 id="📥commit-or-pull-request">📥Commit or pull request</h1>
<hr />
