class apiRequest {
  constructor(url, elementId) {
    this.url = url;
    this.elementId = elementId;
  }
  getPost() {
    let e = document.querySelector(`#${this.elementId}`);
    fetch(this.url)
      .then((response) => response.json())
      .then((posts) => {
        for (let i = 0; i < posts.length; i++) {
          e.innerHTML += `<article data-article="postid-${
            posts[i].id
          }"><h1 class="heading">${posts[i].title.toUpperCase()}</h1>
          <p class="body-post">${
            posts[i].body.charAt(0).toUpperCase() + posts[i].body.slice(1)
          }</p></article>`;
        }
      });
  }
}

let reqPost = new apiRequest(
  "https://jsonplaceholder.typicode.com/posts",
  "post"
);
reqPost.getPost();