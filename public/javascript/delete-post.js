const deletePostHandler = async function (event) {
    event.preventDefault();
    const postId = document.getElementById("post-id");
  
    fetch("/api/post/" + postId.value, {
      method: "DELETE",
    })
      .then(function () {
        document.location.replace("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  
    document.querySelector(".delete-post-btn")
    document.addEventListener("click", deletePostHandler);