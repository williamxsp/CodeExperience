$(function () {
    init();
});


function init() {
    scroll();
    load();
    menu();
    grade();
}

function load() {
    $("#curso .passCircles span.passCircle:nth-child(1)").addClass('active');
    $("#curso .fp-controlArrow.fp-prev").css('display', 'none');
    $("#curso .fp-controlArrow.fp-prev .passArrow").append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.77 28.43" class="arrow arrowRight"><defs><style>.faa45763-1a5b-4df9-a16d-f6483a126e3f{fill:#e2e2e2;}</style></defs><title>arrow</title><g id="b989d351-0c07-4193-9862-0194240d6ba1" data-name="Layer 2"><g id="2e1cc3ac-5c50-40af-a2a0-dcd9f43c9701" data-name="Layer 1"><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="7.11" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="14.21" y="7.11" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="10.66" y="3.55" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" y="7.11" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="3.55" y="3.55" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="7.11" y="7.11" width="3.55" height="21.32"/></g></g></svg>Passos Anteriores');
    $("#curso .fp-controlArrow.fp-next .passArrow").append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.77 28.43" class="arrow arrowLeft"><defs><style>.faa45763-1a5b-4df9-a16d-f6483a126e3f{fill:#e2e2e2;}</style></defs><title>arrow</title><g id="b989d351-0c07-4193-9862-0194240d6ba1" data-name="Layer 2"><g id="2e1cc3ac-5c50-40af-a2a0-dcd9f43c9701" data-name="Layer 1"><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="7.11" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="14.21" y="7.11" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="10.66" y="3.55" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" y="7.11" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="3.55" y="3.55" width="3.55" height="3.55"/><rect class="faa45763-1a5b-4df9-a16d-f6483a126e3f" x="7.11" y="7.11" width="3.55" height="21.32"/></g></g></svg>Próximos Passos');
    $("#curso .passCircles span.passCircle").on('click', function () {
        $.fn.fullpage.moveTo('o-curso', $(this).data('pass'));
    });
}
function scroll() {
    $("main").fullpage({
        anchors: ['bem-vindo', 'a-iniciativa', 'o-curso', 'grade-curricular', 'linha-do-tempo', 'inscreva-se', 'nossa-equipe', 'nossos-parceiros', 'contate-nos'],
        menu: '#menu',
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            if (anchorLink == 'o-curso') {
                curso(slideIndex);
                if (slideIndex === 0) {
                    $("#curso .fp-controlArrow.fp-prev").css('display', 'none');
                    $("#curso .fp-controlArrow.fp-next").css('display', 'block');
                } else if (slideIndex === 3) {
                    $("#curso .fp-controlArrow.fp-prev").css('display', 'block');
                    $("#curso .fp-controlArrow.fp-next").css('display', 'none');
                } else {
                    $("#curso .fp-controlArrow.fp-prev,#curso .fp-controlArrow.fp-next").css('display', 'block');
                }
            }
        },
        onLeave: function (anchorIndex, index) {
            if (index === 5) {
                $(".fp-scrollable").data('iscrollInstance').scrollTo(0, 0);
            }

        }
    });
}
function menu() {
    $('#menu-icon').on('click', function () {
        $('#menu-icon').toggleClass('active');
        $('#menu').toggleClass('active');
    });
    $('#menu ul li a').on('click', function () {
        $('#menu-icon').removeClass('active');
        $('#menu').removeClass('active');
    });
}

function grade() {
    $(".grades").on("click", function () {
        $("#grade h2").css({
            "margin-right": "30%",
            "font-weight": "bold",
            "font-size": "15px"
        });
        $("#grade .content").css({
            "margin-top": "1%",
            "margin-right": "15%",
            "height": "auto",
            "width": "25%",
            "align-items": "normal",
            "flex-wrap": "nowrap"
        });
        $(".grades p").css({"display":"none"});
        $(".grades svg line,.grades svg path,.grades svg circle,.grades svg polyline").removeAttr('style');
        $(".grades svg line,.grades svg path,.grades svg circle,.grades svg polyline").css({
            "will-change": "fill,stroke",
            "transition": "all .5s"
        });
        switch ($(this).data("grade")) {
            case 'mobile':
                $(".79467428-59bb-423e-94d6-724c8d65da3e,.bad627ad-1ab8-4cf9-9bd1-57c7d119eb5a,.fcf334ac-c5b2-4203-801c-e581911a8b6c").css("stroke", "#fff");
                $(".8938a608-9343-4f50-8f77-8bffbfac7f82").css("stroke", "#634893");
                $(".dd93b2e8-d58a-4e5a-a524-503aed984d16").css({
                    "stroke": "transparent",
                    "fill": "#634893"
                });
                break;
            case 'web':
                $(".a5a9468b-d8eb-4f93-a3a9-ff02dd93d9da,.bfd18684-fe00-48a5-b318-a70120889bde").css("stroke", "#51b9b5");
                $(".ebe3d445-6749-4bf0-b20c-f4f535ea2758,.06625f60-5548-4785-9065-9616281eeb7a,.da6216a5-663b-49bf-b350-d2f576cfd871").css("stroke", "#fff");
                $(".a9a981be-c51f-487d-acc3-0e773c4f582f").css({
                    "stroke": "transparent",
                    "fill": "#51b9b5"
                });
                break;
            case 'back':
                $(".44d5883a-be9c-42ca-923e-070f2b15f68d").css("stroke", "#d8167d");
                $(".67bf3dba-ad89-4e02-85c9-3329e1f39750,.05b6ef4e-cbfc-44b0-a14c-31df405d6aa0,.3de6f27a-3817-49d7-a6f7-e1030e921155").css("stroke", "#fff");
                $(".1a095f3d-aa3c-4402-93bc-0064652cfa38").css({
                    "stroke": "transparent",
                    "fill": "#d8167d"
                });
                break;
            case 'iot':
                $(".e0e7de21-cdc6-4a8f-a756-80967adcbd15,.b6937b7b-368a-4293-ac05-56e406e5731d,.c6c95c6b-4562-480d-b26d-69494a54b146,.2909dbcf-e690-42b5-af1a-8a49a3530e1e").css("stroke", "#fff");
                $(".aaff7a77-8c67-4002-b7b6-ce234008cf91").css({
                    "stroke": "transparent",
                    "fill": "#dd5833"
                });
                break;
        }
        $(".curso").css('display', 'none');
        $("#" + $(this).data("grade") + "View").css('display', 'flex');
    })
}

function curso(value) {
    $("#curso .passCircles span.passCircle").removeClass('active');
    $("#curso .passCircles span.passCircle:nth-child(" + (value + 1) + ")").addClass('active');
}