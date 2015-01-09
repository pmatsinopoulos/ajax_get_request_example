$(document).ready(function(){
    $('#get-message-button').on('click', function(){
        var url = '/messages/show';
        var username = 'foo_username';
        var data = {
            to: username
        };
        $.ajax({
            url: url,
            method: 'GET',
            data: data,
            success: function(data, textStatus, jqXHR) {
                alert(data);
            }
        });
    });
});