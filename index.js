let profileMenu = document.querySelector('#profileMenu');
function toggleProfileMenu() {
    profileMenu.classList.toggle('open-menu');
}

let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity(){
  sidebarActivity.classList.toggle("open-activity")

  if(sidebarActivity.classList.contains("open-activity")){
    moreLink.innerHTML = "Show less <b>-<b>";
  }
  else{
    moreLink.innerHTML = "Show more <b>+<b>";

  }
}
