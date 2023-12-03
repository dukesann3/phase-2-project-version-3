
#FLAT SOCIAL

FlatSocial is a social media website that allows users to upload posts about whatever is on their mind.

##FEATURES

1. GETs social media posts from json-server API and presents it on UserFeed.
2. The user is able to POST new social media post.
3. Post list will be updated as soon as user posts.
4. User liking post will trigger 2 PATCH requests to change like count and like status. Like status is whether user already liked post or not.
5. User is able to hide posts from feed by pressing hide button. Pressing hide button will trigger a PATCH request changing isHidden variable.
6. Hidden posts are shown in Settings page and it includes an unhide button. Pressing this will trigger a PATCH request changing isHidden variable.

##INSTALLATION

Use npm to install all packages related to this project via:

```bash
npm install
```
##HOW TO USE

1. User will need to start json-server via:

```bash
json-server --watch mockdata.json --port 8000
```

2. User will need to start the react app via:

```bash
npm start
```

