$(function () {
    $("#bookBtn").click(function () {
        $('#bookModal').modal('toggle');
    });
});

$(function () {
    $("#bookBtnTwo").click(function () {
        $('#bookModal').modal('toggle');
    });
});

$(function () {
    $("#bookBtnThree").click(function () {
        $('#eventModal').modal('toggle');
        $('#bookModal').modal('toggle');
    });
});
$(function () {
    $("#bookBtnFour").click(function () {
        $('#menuModal').modal('toggle');
        $('#bookModal').modal('toggle');
    });
});
$(function () {
    $("#bookBtnFaq").click(function () {
        $('#faqModal').modal('toggle');
        $('#bookModal').modal('toggle');
    });
});

$(function () {
    $("#eventBtn").click(function () {
        $('#eventModal').modal('toggle');
    });
});
$(function () {
    $("#faqBtn").click(function () {
        $('#faqModal').modal('toggle');
    });
});

$(function () {
    $("#menuBtn").click(function () {
        $('#menuModal').modal('toggle');
    });
});
$(function () {
    $("#menuBtnTwo").click(function () {
        $('#menuModal').modal('toggle');
    });
});
$(function () {
    $("#contactBtn").click(function () {
        $('#contactModal').modal('toggle');
    });
});
$(function () {
    $("#contactBtnTwo").click(function () {
        $('#contactModal').modal('toggle');
    });
});

$('.carousel').carousel({
    interval: 3500
  })