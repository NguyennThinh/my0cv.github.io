/*Kiểm tra emial và hiển thị thông tin cá nhân */

const patternEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let checkEmail = function () {
  var email = document.querySelector(".email").value;

  if (email.match(patternEmail)) {
    document.querySelector(".lock").style.display = "none";
    document.querySelector(".my-info").style.display = "block";
    return true;
  }

  return false;
};

/*Hiển thị button "View more" khi đưa chuột vào các thông tin khác*/
var detail = document.getElementsByClassName("my");

for (let i = 0; i < detail.length; i++) {
  detail[i].onmouseover = function (e) {
    detail[i].querySelector(".view-more").style.display = "block";
  };
  detail[i].onmouseout = function (e) {
    detail[i].querySelector(".view-more").style.display = "none";
  };
}

/*Sự kiện click button "View more"*/
var viewMore = document.getElementsByClassName("view-more");
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].onclick = function (e) {
    if (viewMore[i].value === "View less") {
      viewMore[i].value = "View more";

      detail[i].querySelector(".detail").style.display = "none";
    } else {
      viewMore[i].value = "View less";

      detail[i].querySelector(".detail").style.display = "block";
    }
  };
}
