function showlist(e){
    var $gridCount=$('.grid-container');
    e.preventDefault();
    $gridCount.hasClass('list-view')?
    $gridCount.removeClass('list-view'):
    $gridCount.addClass('list-view');
}


function gridlist(e){
    var $gridCount=$('.grid-container');
    e.preventDefault();
    $gridCount.removeClass('list-view');
}

$(document).on("click",'.btn-grid',gridlist);
$(document).on("click",'.btn-list',showlist);