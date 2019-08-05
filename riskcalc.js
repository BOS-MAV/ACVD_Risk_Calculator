 function calc_risk() {
                //declare a totscore variable

                var totScore;
                //declare variables to hold the rest
                var age, sex_t, sex, race, race_t, diabetes, diabetes_t, smoker, smoker_t, hypertension, hypertension_t, statin, statin_t, systolic, diastolic,
                        totchl, hdl, ldl;
                age = parseInt($("#txtAge").val());
                if (parseInt($("#BP_Sys").val()) > 130)
                    systolic = 2;
                else
                    systolic = -2;
                if (parseInt($("#BP_Dia").val()) > 90)
                    diastolic = -2;
                else
                    diastolic = 2;
                if (parseInt($("#TotChol").val()) > 200)
                    totchl = -2;
                else
                    totchl = 0;
                if (parseInt($("#HDL").val()) > 50)
                    hdl = -1;
                else
                    hdl = 0;
                if (parseInt($("#LDL").val()) < 50)
                    ldl = -2;
                else
                    ldl = 0;
                if ($("input[name = 'Sex']:checked").val() === "Male")
                    sex = 2;
                else
                    sex = 1;
                race_t = $("input[name = 'Race']:checked").val();
                if (race_t === 'White')
                    race = 1;
                else if (race_t === 'African American')
                    race = 2;
                else
                    race = 3;
                if ($("input[name = 'Diabetes']:checked").val() === "Yes")
                    diabetes = -1;
                else
                    diabetes = 0;
                if ($("input[name = 'Smoker']:checked").val() === "Current")
                    smoker = -3;
                else
                    smoker = 0;
                if ($("input[name = 'Hypertension']:checked").val() === "Yes")
                    hypertension = -3;
                else
                    hypertension = 0;
                if ($("input[name = 'Statin']:checked").val() === "Yes")
                    statin = -1;
                else
                    statin = 0;

                totScore = age + sex + race + diabetes + smoker + hypertension + statin + systolic + diastolic + totchl + hdl + ldl;

                return totScore;
            }
