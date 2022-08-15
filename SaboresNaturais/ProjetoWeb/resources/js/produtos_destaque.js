var produtosEmDestaque = ["1","15","28"];

function pegarIndexBase(produto) {
    var i = 0;
    var indexBase = 0;
    for (; i < produtosEmDestaque.length; i++) {
        if (produtosEmDestaque[i] == produto) {
            indexBase = i;
            break;
        }
    }
    return indexBase;
}

function next() {
    var img = document.getElementById('produto_destaque');
    var produto = img.classList;
    var indexBase = pegarIndexBase(produto);
    var novoIndex = 
        (indexBase < (produtosEmDestaque.length-1)) ? indexBase+1 : 0;
    img.src = "resources/images/produtos/"+produtosEmDestaque[novoIndex]+".png";
    img.setAttribute("onclick", "javascript:carregarProduto('"+produtosEmDestaque[novoIndex]+"');");
    img.classList = produtosEmDestaque[novoIndex];
}
function previous() {
    var img = document.getElementById('produto_destaque');
    var produto = img.classList;
    var indexBase = pegarIndexBase(produto);
    var novoIndex = 
        (indexBase > 0) ? indexBase-1 : produtosEmDestaque.length-1;
    img.src = "resources/images/produtos/"+produtosEmDestaque[novoIndex]+".png";
    img.setAttribute("onclick", "javascript:carregarProduto('"+produtosEmDestaque[novoIndex]+"');");
    img.classList = produtosEmDestaque[novoIndex];
}