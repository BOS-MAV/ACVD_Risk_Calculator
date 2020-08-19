function numberFormat(val, decimalPlaces) {

    var multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces);
}
function calc_risk() {
                //declare a totscore variable
               var totScore;
                //declare variables to hold the rest
                var age, age5,age5Weight, sex, sexWeight,race, race_t, raceWeight,diabetes, diabetesWeight, smoker, smokerWeight, 
                        hypertension, hypertension_t, statin, statin_t, systolic, diastolic,totchl, hdl, ldl;
                //(05/2020) this now needs to be split out based on statin or not statin use
                age = parseInt($("#txtAge").val());
                age5 = age/5;
                age5Weight = age5*0.20551;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 1;
                else
                    sex = 0;
                sexWeight = sex * 0.46515;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 1;
                else if (race_t === 'African American')
                    race = 0;
                else
                    race = 0;
                raceWeight = race * -0.17661;
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                    diabetes = 1;
                else
                    diabetes = 0;
                diabetesWeight = diabetes * 0.48240;
                if ($("input[name = 'Smoker']:checked").val() === "Ever")
                    smoker = 1;
                else
                    smoker = 0;
                smokerWeight = smoker * 0.41682;
                if (parseInt($("#TotChol").val()) > 150 && parseInt($("#TotChol").val()) < 201)
                {
                    totchl = 0.01114;
                }
                else if (parseInt($("#TotChol").val()) > 200 && parseInt($("#TotChol").val()) < 251)
                {
                    totchl = 0.15278;
                }
                else if (parseInt($("#TotChol").val()) > 250)
                {
                    totchl = 0.45186;
                }
                else
                {
                    totchl = 0;
                }
                hdlc=parseInt($("#HDL").val());
                hdlc10 = hdlc/10;
                hdlcWeight = hdlc10 * -0.07256;
                bpSys = parseInt($("#BP_Sys").val());
                bpSys10 = bpSys/10;
                bpSysWeight = bpSys10*0.08852;
                if ($("input[name = 'Hypertension']:checked").val() === "No")
                    hypertensionWeight = 0;
                else
                    hypertensionWeight = 0.31875
                if ($("input[name = 'Statin']:checked").val() === "No")
                    statinWeight = 0;
                else
                    statinWeight = -0.07573;
                xbeta = age5Weight + sexWeight + raceWeight + diabetesWeight + smokerWeight + totchl+hdlcWeight+bpSysWeight+hypertensionWeight+statinWeight;
                eXbeta = Math.exp(xbeta-2.93853);
                risk = 1 - Math.pow(0.98731,eXbeta);
                return numberFormat(risk*100,2);
                }   
