var txtAgeToolTipOn = 1;
var bpSysToolTipOn = 1;
var bpDiaToolTipOn = 1;
var totCholToolTipOn = 1;
var HDLToolTipOn = 1;
var LDLToolTipOn = 1;

$(function () {
    $(".controlgroup").controlgroup();
    $(".controlgroup-vertical").controlgroup({
        "direction": "vertical"
    });
});
// get selection
$('.colors input[type=radio]').on('change', function () {
    console.log(this.value);
});
$("input:radio[name='thename']").each(function (i) {
    this.checked = false;
});
$(document).ready(function () {
    $("#txtAge").focus();
    $("#txtAge").tooltip({title: "Please enter an age between 20 and 79", placement: "bottom", trigger: "manual"});
    $("#sexMark").tooltip({title: "Please choose either Male or Female", placement: "bottom", trigger: "manual"});
    $("#raceMark").tooltip({title: "Please choose White, African American or Other", placement: "bottom", trigger: "manual"});
    $("#BP_Sys").tooltip({title: "Please enter a systolic blood pressure between 80 and 300 mm HG", placement: "right", trigger: "manual"});
    $("#diabMark").tooltip({title: "Please choose either yes or no",placement: "bottom", trigger: "manual"});
    $("#smokeMark").tooltip({title: "Please choose either ever or never",placement:"bottom",trigger:"manual"});
    $("#hyperMark").tooltip({title: "Please choose either yes or no",placement:"bottom",trigger:"manual"});
    $("#statinMark").tooltip({title: "Please choose either yes or no",placement:"bottom", trigger:"manual"});
    $("#BP_Dia").tooltip({title: "Please enter a diastolic blood pressure between 50 and 180 mm HG", placement: "right", trigger: "manual"});
    $("#TotChol").tooltip({title: "Please enter total cholesterol between 0 and 500 mg/dL", placement: "bottom", trigger: "manual"});
    $("#HDL").tooltip({title: "Please enter HDL cholesterol between 0 and 150 mg/dL", placement: "bottom", trigger: "manual"});
    $("#LDL").tooltip({title: "Please enter LDL cholesterol between 0 and 400 mg/dL", placement: "bottom", trigger: "manual"});
    $('#sub').on('click', function (event) {
        var isvalidate = $("#myForm")[0].checkValidity();
        if ((isvalidate) && txtAge_Val() && bpSys_Val() && bpDia_Val() && totChol_Val() && HDL_Val() && LDL_Val()) {
            event.preventDefault();
            $('#message').html('Your 5-year ASCVD risk is ' + calc_risk()+"%");
            $('#myModal').modal('show');
        }
        else
        {
            
            if (txtAge_Val())
            {
                txtAgeToolTipOn = 1;
                $("#txtAge").tooltip("hide");
                if (($("input[name = 'Sex']:checked").val() !== 'Male') && ($("input[name = 'Sex']:checked").val() !== 'Female'))
                {
                    $("#sexMark").tooltip("show");
                    $("#Sex").focus();
                }
                else
                {
                    $("#sexMark").tooltip("hide");
                    if (($("input[name = 'Race']:checked").val() != 'White') && ($("input[name = 'Race']:checked").val() != 'AfrAm')
                            && ($("input[name = 'Race']:checked").val() != 'Hisp') && ($("input[name = 'Race']:checked").val() != 'Other'))
                    {
                        $("#raceMark").tooltip("show");
                        $("#Race").focus();
                    }
                    else
                    {
                        $("#raceMark").tooltip("hide");
                        if (($("input[name = 'Diabetes']:checked").val() !== 'Yes') && ($("input[name = 'Diabetes']:checked").val() != 'No'))
                        {
                            $("#diabMark").tooltip("show");
                            $("#diab").focus();
                        }
                        else
                        {
                            $("#diabMark").tooltip("hide");
                            if (($("input[name = 'Smoker']:checked").val() !== 'Ever') && ($("input[name = 'Smoker']:checked").val() !== 'Never'))
                            {
                                $("#smokeMark").tooltip("show");
                                $("#smoker").focus();
                            }
                            else
                            {
                                $("#smokeMark").tooltip("hide");
                                if (($("input[name = 'Hypertension']:checked").val() !== 'Yes') && ($("input[name = 'Hypertension']:checked").val() !== 'No'))
                                {
                                    $("#hyperMark").tooltip("show");
                                    $("#Hypertension").focus();
                                }
                                else
                                {
                                    $("#hyperMark").tooltip("hide");
                                    if (($("input[name = 'Statin']:checked").val() !== 'Yes') && ($("input[name = 'Statin']:checked").val() !== 'No'))
                                    {
                                        $("#statinMark").tooltip("show");
                                        $("#Statin").focus();
                                    }
                                    else
                                    {
                                        $("#statinMark").tooltip("hide");
                                        if (!(bpSys_Val()))
                                        {
                                            $("#bpSys").tooltip("show");
                                            $("#bpSys").focus();
                                        }
                                        else
                                        {
                                            $("#bpSys").tooltip("hide");
                                            bpSysToolTipOn = 1;
                                            if (!(bpDia_Val()))
                                            {
                                                $("#bpDia").tooltip("show");
                                                $("#bpDia").focus();
                                            }
                                            else
                                            {
                                                $("#bpDia").tooltip("hide");
                                                bpDiaToolTipOn = 1;
                                                if (!(totChol_Val()))
                                                {
                                                    $("#totChol").tooltip("show");
                                                    $("#totChol").focus();
                                                }
                                                else
                                                {
                                                    $("#totChol").tooltip("hide");
                                                    totCholToolTipOn = 1;
                                                    if (!(HDL_Val()))
                                                    {
                                                        $("#HDL").tooltip("show");
                                                        $("#HDL").focus();
                                                    }
                                                    else
                                                    {
                                                        $("#HDL").tooltip("hide");
                                                        HDLToolTipOn  = 1;
                                                        if (!(LDL_Val()))
                                                        {
                                                            $("#LDL").tooltip("show");
                                                            $("#LDL").focus();
                                                        }
                                                        else
                                                        {
                                                            $("#LDL").tooltip("hide");
                                                            LDLToolTipOn =1;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    $("#txtAge").blur(function () {
          if (txtAge_Val())
          {
            txtAgeToolTipOn = 1;
          }
    });

    $("input[name='Sex']").change(function () {
        $("#sexMark").tooltip("hide");
        $("#Race").focus();
    });

    $("input[name='Race']").change(function () {
        $("#raceMark").tooltip("hide");
        $("#Diabetes").focus();
    });
    $("input[name='Diabetes']").change(function () {
        $("#diabMark").tooltip("hide");
        $("#Smoker").focus();
    });
    $("input[name='Smoker']").change(function () {
       $("#smokeMark").tooltip("hide");
       $("#Hypertension").focus();
    });
    $("input[name='Hypertension']").change(function (){
       $("#hyperMark").tooltip("hide");
       $("Statin").focus();
    });
    $("input[name='Statin']").change(function () {
       $("#statinMark").tooltip("hide");
       $("#BP_Sys").focus();
    });
    $("#BP_Sys").blur(function () {
        if (bpSys_Val())
        {
            bpSysToolTipOn = 1;
        }
    });
    $("#BP_Dia").blur(function () {
       
       if (bpDia_Val())
       {
        bpDialToolTipOn = 1;
       }
    });
    $("#BP_Dia").change(function () {
     
        if (bpDia_Val())
        {
            bpDialToolTipOn = 1;
        }
    });
    $("#TotChol").blur(function () {
       if (totChol_Val())
       {
        totCholToolTipOn = 1;
       }
    });
    $("#HDL").blur(function () {
        if (HDL_Val())
        {
            HDLToolTipOn = 1;
        }
    });
    $("#LDL").blur(function () {
       if (LDL_Val())
       {
        LDLToolTipOn = 1;
       }
    });
    
});

function txtAge_Val() {
        var input = $("#txtAge");
        if ((parseInt(input.val()) < 20 || parseInt(input.val()) > 79) || (input.val() === ''))
        {
            if (txtAgeToolTipOn===1)
            {
                $("#txtAge").tooltip("show");
                input.removeClass("valid").addClass("invalid");
                $("#myForm input").prop("disabled",true);
                $("#myForm button").prop("disabled",true);
                $("#txtAge").prop("disabled",false);
                $("#txtAge").focus();
                txtAgeToolTipOn = 0;
            }
             return false;
        }
        else
        {
            $("#txtAge").tooltip("hide");
            input.removeClass("invalid").addClass("valid");
            $("#myForm input").prop("disabled",false);
            $("#myForm button").prop("disabled",false);
            $("#Sex").focus();
            return true;
        }
}
function bpSys_Val() {
    var input = $("#BP_Sys");

    if (parseInt(input.val()) < 80 || parseInt(input.val()) > 300 || input.val() === "")
    {

        if (bpSysToolTipOn ===1)
        {
            $("#BP_Sys").tooltip("show");
            $("#BP_Sys").removeClass("valid").addClass("invalid");
            $("#myForm input").prop("disabled",true);
            $("#myForm button").prop("disabled",true);
            $("#BP_Sys").prop("disabled",false);
            $("#BP_Sys").focus();
            bySysToolTipOn = 0;
        }
        return false;
    }
    else
    {
        $("#BP_Sys").tooltip("hide");
        $("#BP_Sys").removeClass("invalid").addClass("valid");
        $("#myForm input").prop("disabled",false);
        $("#myForm button").prop("disabled",false);
        $("#BP_Dia").focus();
        return true;
    }
}

function bpDia_Val() {
    var input = $("#BP_Dia");

    if (parseInt(input.val()) < 50 || parseInt(input.val()) > 180 || input.val() === "")
    {

        if (bpDiaToolTipOn ===1)
        {
            $("#BP_Dia").tooltip("show");
            $("#BP_Dia").removeClass("valid").addClass("invalid");
            $("#myForm input").prop("disabled",true);
            $("#myForm button").prop("disabled",true);
            $("#BP_Dia").prop("disabled",false);
            $("#BP_Dia").focus();
            bpDiaToolTipOn = 0;
        }
        return false;
    }
    else
    {
        $("#BP_Dia").tooltip("hide");
        $("#BP_Dia").removeClass("invalid").addClass("valid");
        $("#myForm input").prop("disabled",false);
        $("#myForm button").prop("disabled",false);
        $("#TotChol").focus();
        return true;
    }
}

function totChol_Val() {
    var input = $("#TotChol");

    if (parseInt(input.val()) < 0 || parseInt(input.val()) > 500 || input.val() === "")
    {

        if (totCholToolTipOn === 1)
        {
            $("#TotChol").tooltip("show");
            $("#TotChol").removeClass("valid").addClass("invalid");
            $("#myForm input").prop("disabled",true);
            $("#myForm button").prop("disabled",true);
            $("#TotChol").prop("disabled",false); 
            $("#TotChol").focus();
            totCholToolTipOn = 0;            
        }
        return false;
    }
    else
    {
        $("#TotChol").tooltip("hide");
        $("#TotChol").removeClass("invalid").addClass("valid");
        $("#myForm input").prop("disabled",false);
        $("#myForm button").prop("disabled",false);
        $("#HDL").focus();
        return true;
    }
}

function HDL_Val() {
    var input = $("#HDL");

    if (parseInt(input.val()) < 0 || parseInt(input.val()) > 150 || input.val() === "")
    {

        if (HDLToolTipOn  ===1) 
        {
            $("#HDL").tooltip("show");
            $("#HDL").removeClass("valid").addClass("invalid");
            $("#myForm input").prop("disabled",true);
            $("#myForm button").prop("disabled",true);
            $("#HDL").prop("disabled",false);
            $("#HDL").focus();
            HDLToolTipOn = 0;
        }
        return false;
    }
    else
    {
        $("#HDL").tooltip("hide");
        $("#HDL").removeClass("invalid").addClass("valid");
        $("#myForm input").prop("disabled",false);
        $("#myForm button").prop("disabled",false);
        $("#LDL").focus();
        return true;
    }
}

function LDL_Val() {
    var input = $("#LDL");

    if (parseInt(input.val()) < 0 || parseInt(input.val()) > 400 || input.val() === "")
    {

        if (LDLToolTipOn ===1)
        {
            $("#LDL").tooltip("show");
            $("#LDL").removeClass("valid").addClass("invalid");
            $("#myForm input").prop("disabled",true);
            $("#myForm button").prop("disabled",true);
            $("#LDL").prop("disabled",false);
            $("#LDL").focus();
            LDLToolTipOn = 0;
        }
        return false;
    }
    else
    {
        $("#LDL").tooltip("hide");
        $("#LDL").removeClass("invalid").addClass("valid");
        $("#myForm input").prop("disabled",false);
        $("#myForm button").prop("disabled",false);
        return true;
    }
 }


