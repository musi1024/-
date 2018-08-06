$(click).on('click', function(e) {
    $(popover).toggle()
    $(document).on('mousedown', function(e) {
        var $e = $(e.target)
        if (!$e.is($(click)) && !$e.is($(popover))) {
            $(popover).hide()
        }
    })
})





