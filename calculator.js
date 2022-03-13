function ac(){
    document.getElementById("res").value=" ";

}
function Show(input){
    document.getElementById("res").value+=input;
}
function cal()
{
    var output=eval(document.getElementById("res").value);
    document.getElementById("res").value=output;
}
function del() {
    var input = document.getElementById("res");
    input.value = input.value.substring(0, input.value.length - 1);
  }