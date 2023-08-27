$(document).ready(function() {
    $("#ejecutar").click(function() {
        
        const numero1 = parseFloat($("#num1").val());
        const numero2 = parseFloat($("#num2").val());
        const operador = $("#seleccion").val();

        let result;

        switch(operador)
        {
            case "Sumar":
                result = numero1 + numero2;
                break;

            case "Restar":
                if(numero1 < numero2)
                {
                    result = "Resultado negativo";
                    break;
                }else{
                    result = numero1 - numero2;
                    break; 
                }


            case "Multiplicar":
                result = numero1 * numero2;
                break;

            case "Dividir":
                if(numero1 < numero2)
                {
                    result = "Resultado negativo";
                    break;
                }else{
                    result = numero1 / numero2;
                    break; 
                }

            default:
                result = "Operacion invalida";
        }

        $("#resultado").val(result);

    });
});
