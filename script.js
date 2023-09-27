const openButton = document.getElementById('open-terminal');
const modal = document.getElementById('terminal-dialog');
const closeButton = document.getElementById('close-terminal');

openButton.onclick = function () {
    modal.showModal();
};

closeButton.onclick = function () {
    modal.close();
};

const openButton2 = document.getElementById('open-terminal2');
const modal2 = document.getElementById('terminal-dialog2');
const closeButton2 = document.getElementById('close-terminal2');

openButton2.onclick = function () {
    modal2.showModal();
};

closeButton2.onclick = function () {
    modal2.close();
};

function enviarDados() {
    var entradaUsuario = document.getElementById("entradaUsuario").value;
    //var minhaFoto = document.getElementById('minhaFoto');
    var blog = document.getElementById('blog');
  
    if (entradaUsuario === "cd_blog") {
    //   minhaFoto.style.display = 'block';
    //   minhaFoto.style.borderRadius = '50%';
    //   minhaFoto.style.margin = 'auto';
    //   minhaFoto.style.margin = '';
      document.getElementById('blog').innerHTML = "[Vitor Almeida] - Desenvolvedor Front-End e Mobile <br><br> Eu me chamo Vitor, um desenvolvedor apaixonado por criar experiências incríveis na web e em dispositivos móveis. Com um sólido conjunto de habilidades em HTML, CSS, JavaScript, Flutter/Dart e Kotlin, estou focado em transformar ideias em produtos digitais que se destacam. <br><br> [HABILIDADES FRONT-END] - HTML5, CSS3 e JavaScript <br><br> [HABILIDADES MOBILE ] - Java/Kotlin e Flutter/Dart <br><br> [HABILIDADES BACK-END] - Java e Python <br><br> [HABILIDADES BANCO DE DADOS - FireBase NoSQL"
    } else if(entradaUsuario === "cls") {
        document.getElementById('blog').innerHTML = ""
        //minhaFoto.style.display = 'none';
        
    }else if(entradaUsuario === "cd_projects") {
        //minhaFoto.style.display = 'none';
        document.getElementById('blog').innerHTML = "Bem vindo a área de projetos, segue os link abaixo:  <br><br> Em construção..."
    }else {
        // Caso contrário, exibe um alerta com "NÃO FUNCIONOU"
        window.alert("OPS ALGO DEU ERRADO");
    }
  }

function ocultarIcon() {
    const icons1 = document.getElementById('icons1');
    const icons2 = document.getElementById('icons2');
    const icons3 = document.getElementById('icons3');
    const icons4 = document.getElementById('icons4');
    
    if (window.innerWidth < 768) { // You can adjust this breakpoint as needed
        icons1.style.display = 'none';
        icons2.style.display = 'none';
        icons3.style.display = 'none';
        icons4.style.display = 'none';
    } else {
        icons1.style.display = 'block';
        icons2.style.display = 'block';
        icons3.style.display = 'block';
        icons4.style.display = 'block';
    }
}

// Executa a função quando a página é carregada e quando a janela é redimensionada
window.addEventListener('load', ocultarIcon);
window.addEventListener('resize', ocultarIcon);

function openTerminalFooter() {
    document.getElementById('terminal-dialog').showModal();
}

function closeTerminalFooter() {
    document.getElementById('terminal-dialog').close();
}

function openTerminal2Footer() {
    document.getElementById('terminal-dialog2').showModal();
}

function closeTerminal2Footer() {
    document.getElementById('terminal-dialog2').close();
}

function openGithubFooter() {
    // Abre o link do GitHub em uma nova aba
    window.open('https://github.com/vitor-desenv', '_blank');
}

//calculadora
function insert(num)
    {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
    {
        document.getElementById('resultado').innerHTML = "";
}
    function back()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado)
        {
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
        else
            {
            document.getElementById('resultado').innerHTML = "Nada..."
            }
}