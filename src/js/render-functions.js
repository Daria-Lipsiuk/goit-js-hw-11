import SimpleLightbox from "simplelightbox";

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", });
const gallery = document.querySelector(".gallery");

export function createGallery(images) {
  const markup = images
    .map((img) => {
      const shortTags = img.tags.split(",").slice(0, 3).join(", "); 

      return `
        <li class="gallery-item">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${shortTags}" />
          </a>
          <div class="info">
            <span>Likes: ${img.likes}</span>
            <span>Views: ${img.views}</span>
            <span>Comments: ${img.comments}</span>
            <span>Downloads: ${img.downloads}</span>
          </div>
        </li>`;
    })
    .join("");

  document.querySelector(".gallery").insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  document.querySelector(".loader").classList.add("visible");
}

export function hideLoader() {
  document.querySelector(".loader").classList.remove("visible");
}
