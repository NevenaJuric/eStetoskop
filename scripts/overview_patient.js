$(document).ready(function(){
    var user = getUser();
    $('#display-text-user').html("Dr " + user.name);

        var id = getUser().id;
        $.post('api/overview.php', {id: id}, function (response) {
        // console.log(response);
        var all_patient = JSON.parse(response);
        // console.log(all_patient);
        if(all_patient === "no"){
            alert("Nemate nijednog pacijenta!");
        }else{
            $('#all-patient').html('');

            for(var i = 0; i < all_patient.length; i = i+6){
                var tdName = '<td>' + all_patient[i] + '</td>';
                var tdDiagnosis = '<td>' + all_patient[i+1]  + '</td>';
                var tdAbout = '<td>' + "Alegrije:" +  all_patient[i+2] + 
                "<br> Lekovi: " + all_patient[i+3] +"<br> Oboljenja: " +  all_patient[i+4] + "<br> Operacije: " + all_patient[i+5]
                  + '</td>';
                var trElement = '<tr>' + tdName + tdDiagnosis + tdAbout + '</tr>';
                $('#all-patient').append(trElement);
            }
            
        }

})


    $.post('api/allPatient.php', {id: id}, function(response){
        // console.log(response);
        var all_patient = JSON.parse(response);
        // console.log(all_patient);
        if(all_patient === "no"){
            alert("Nemate nijednog pacijenta!");
        }else{
            $('#option-name').html('');

            for(var i = 0; i < all_patient.length; i+=2){
                var option = '<option ' + 'value = ' + all_patient[i] +  '>' + all_patient[i+1] + '</option>';
                $('#option-name').append(option);
            }
        }
    })

    $("#option-name").blur(function(){
        var patient = $("#option-name").val();
        // console.log(patient);
        $.post('api/karakteristic.php', {patient: patient}, function(response){
            var about = JSON.parse(response);
            // console.log(about);
            $("#karakteristic").html("");
            if(about === "no"){
                var liNo = "<li>Pacijent nije uneo svoje karakteristike!</li>";
                $("#karakteristic").append(liNo);
            }else{
                for(var i = 0; i < about.length; i = i+4){
                    var liAlergic = "<li>Alergije: " + about[i] + "</li>";
                    var liMedicament = "<li>Lekovi: " + about[i+1] + "</li>";
                    var liHrono = "<li>Oboljenje: " + about[i+2] + "</li>";
                    var liOperation = "<li>Operacije: " + about[i+3] + "</li>";
                    var list = liAlergic + liMedicament + liHrono + liOperation;
                    $("#karakteristic").append(list);
                } 
            }
        })
    })

    $('#btn-diagnosis').click(function(){
        var diagnosis = $("#diagnosis").val();
        var patient = $("#option-name").val();
        var id = getUser().id;
        // console.log(patient);

        if(diagnosis.length === 0){
            alert("Morate uneti dijagnozu pacijenta!");
        }

        var postBody = {
            patient: patient,
            diagnosis: diagnosis
        }

        $.post('api/diagnosis.php', postBody, function(response){
            console.log(response);
            if (response) {
                alert("Uspešno ste uneli dijagnozu!");
            } else {
                alert("Već imate dijagnozu za navedenog pacijenta!");
            }
        })
    })
})