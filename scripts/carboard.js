$(document).ready(function(){
    var user = getUser();
    $('#display-text-user').html(user.name);

    var id = getUser().id;
        $.post('api/cardboar.php', {id: id}, function (response) {
            var diagnosis = JSON.parse(response);
            if(diagnosis === "no"){
                alert("Nemate dijagnozu!");
            }else{
                $('#diagnosis').html('');
                var text = '<p>' + diagnosis[0] + '</p>';
                $('#diagnosis').append(text);
            }
    })
})