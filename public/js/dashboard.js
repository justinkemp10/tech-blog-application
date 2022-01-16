const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blogpost-name").value.trim();
  const content = document.querySelector("#blogpost-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogposts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create blog post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("delete-id")) {
    const id = event.target.getAttribute("delete-id");

    const response = await fetch(`/api/blogposts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete blog post");
    }
  }
};


document
  .querySelector(".new-blogpost-form")
  .addEventListener("submit", newFormHandler);

document
.querySelector(".btn-delete")
.addEventListener("click", delButtonHandler);
