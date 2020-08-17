$(document).ready(function(){
    $('.button .mul').attr('disabled', 'true');
    $('.button .div').attr('disabled', 'true');
    $('.button .equal').attr('disabled', 'true');

    $stt = 'offDot';

    $('.number').on('click', function(){
        $char = $(this).html();
        $valueCalculate = $('#input').val();
        $('#input').val($valueCalculate + $char);
        $('.button .operator').removeAttr('disabled');
        $('.button .equal').removeAttr('disabled');
        if(stt === 'offDot'){
            $('.button .dot').removeAttr('disabled');
        };
    });
    
    $('.dot').on('click', function(){
        $char = $(this).html();
        $valueCalculate = $('#input').val();
        $('#input').val($valueCalculate + $char);
        $(this).attr('disabled', 'true');
        $('.button .operator').attr('disabled', 'true');
        stt = 'onDot';
    });
    
    $('.refresh').on('click', function(){
        $('.dot').removeAttr('disabled');
        $('#input').val('');
        $('#result').val('');
        stt = 'onDot';
    });
    
    $('.operator').on('click', function(){
        $char = $(this).html();
        $valueCalculate = $('#input').val();
        $('#input').val($valueCalculate + $char);
        $('.mul').attr('disabled', 'true');
        $('.div').attr('disabled', 'true');
        $('.dot').removeAttr('disabled');
    });

    $('.equal').on('click', function(){
        $result = $('#input').val();
        $('#result').val(eval($result));
    });

    $('.delete').on('click', function(){
        $string = $('#input').val();
        $('#input').val($string.substring(0, $string.length-1));
    });
});