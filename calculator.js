class Calculator{
    
    constructor(a,b){
        this.a=a;
        this.b=b;
        this.sum=this.add(this.a,this.b);
        this.diff=this.subtract(this.a,this.b);
        this.pro=this.multiply(this.a,this.b);
        this.div=this.divide(this.a,this.b);
    }
    add(a,b){
        return a+b;
    }
    subtract(a,b){
        return Math.abs(a-b);
    }
    divide(a,b){
        let c=a/b;
        return c.toFixed(2);
    }
    multiply(a,b){
        return a*b;
    }
    
}
function gen(){
    let a=+document.getElementById("one").value;
    let b=+document.getElementById("two").value;
    let calc=new Calculator(a,b)
    let p=document.querySelector('p');
    p.innerHTML=`Sum :${calc.sum}<br/> Product :${calc.pro}<br/>Quotient : ${calc.div} <br/>Difference : ${calc.diff}`;
    
}