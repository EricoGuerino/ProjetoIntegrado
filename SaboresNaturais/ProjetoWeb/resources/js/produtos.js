var dados = JSON.parse('{"produtos":['
        + '{"id":"1","nome":"Doce de Leite","descricao":"Doce de Leite para dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$28,99"},'
        + '{"id":"2","nome":"Doce de Leite com Coco","descricao":"Doce de Leite para dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$28,99"},'
        + '{"id":"3","nome":"Doce de Leite com Ameixa","descricao":"Doce de Leite para dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$28,99"},'
        + '{"id":"4","nome":"Cocada Cremosa","descricao":"Cocada Cremosa para dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$28,99"},'
        + '{"id":"5","nome":"Doce de Leite com Nozes","descricao":"Doce de Leite para dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$28,99"},'
        + '{"id":"6","nome":"Doce de Abóbora com Coco","descricao":"Doce de Abóbora com Coco para dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$28,99"},'
        + '{"id":"7","nome":"Pé de Moça de Colher","descricao":"Doce de Amendoin tipo pé de moça para dietas de ingestão controlada de açúcares - SEM ADIÇÃO DE AÇÚCARES","categorias":["1","2","3"],"fabricante":"Haribol","peso":"600g","preco":"R$35,99"},'
        + '{"id":"8","nome":"Leite Condensado","descricao":"Sobremesa Láctea sabor Leite Condensado para Dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$35,99"},'
        + '{"id":"9","nome":"Beijinho","descricao":"Foundant de Leite com Coco para dietas de ingestão controlada de açúcares","categorias":["1","2"],"fabricante":"Haribol","peso":"600g","preco":"R$28,99"},'
        + '{"id":"10","nome":"Goibada Cascão Diet","descricao":"Goibada Cascão Diet - Linha Premium","categorias":["1"],"fabricante":"Famoso","peso":"600g","preco":"R$44,99"},'
        + '{"id":"11","nome":"Bananinha","descricao":"Bananinha - Sem adição de açúcar","categorias":["1"],"fabricante":"Famoso","peso":"600g","preco":"R$44,99"},'
        + '{"id":"12","nome":"Abacaxi com Coco","descricao":"Barrinha de Fruta de Abacaxi com Coco - Sem adição de açúcar","categorias":["1"],"fabricante":"Famoso","peso":"600g","preco":"R$44,99"},'
        + '{"id":"13","nome":"Banana com cobertura de chocolate","descricao":"Barrinha de Fruta de Banana com cobertura de chocolate","categorias":["1"],"fabricante":"Famoso","peso":"600g","preco":"R$44,99"},'
        + '{"id":"14","nome":"Coco com cobertura de chocolate","descricao":"Barrinha de Fruta de Coco com cobertura de chocolate","categorias":["1"],"fabricante":"Famoso","peso":"600g","preco":"R$44,99"},'
        + '{"id":"15","nome":"Paçoca","descricao":"Paçoca Moreninha do Rio","categorias":["1","2"],"fabricante":"Rio","peso":"800g","preco":"R$ 19,99"},'
        + '{"id":"16","nome":"Palha Italiana","descricao":"Palha Italiana Sabor Chocolate Enriquecida com Whey Protein","categorias":["1","3"],"fabricante":"Germanos","peso":"30g","preco":"R$ 14,99"},'
        + '{"id":"17","nome":"Palha Italiana","descricao":"Palha Italiana Sabor Cookies & Cream Enriquecida com Whey Protein","categorias":["1","3"],"fabricante":"Germanos","peso":"30g","preco":"R$ 14,99"},'
        + '{"id":"18","nome":"Caramelos de Leite","descricao":"Caramelos de Leite - Sem adição de açúcares - Contém açúcares próprios dos ingredientes","categorias":["1","3"],"fabricante":"Avaré","peso":"200g","preco":"R$ 14,99"},'
        + '{"id":"19","nome":"Gotas de Leite","descricao":"Produzido em Avaré: Doce de Leite Pingo para dietas com insgestão controlada de açúcares","categorias":["1"],"fabricante":"Avaré","peso":"100g","preco":"R$ 21,99"},'
        + '{"id":"20","nome":"Pirulito","descricao":"Pirulito Sabor Morango Zero Açúcar","categorias":["3"],"fabricante":"Doce Amor","peso":"35g","preco":"R$ 13,99"},'
        + '{"id":"21","nome":"Merenguinho", "descricao":"Merenguinho - Sabor Original","categorias":["3"],"fabricante":"Doce Amor","peso":"35g","preco":"R$ 15,99"},'
        + '{"id":"22","nome":"Pingo de Leite","descricao":"Foundant de Leite","categorias":["1"],"fabricante":"Yoot","peso":"500g","preco":"R$ 33,99"},'
        + '{"id":"23","nome":"Cidra","descricao":"Cidra Ralada para dietas com insgestão controlada de açúcares","categorias":["1"],"fabricante":"Doces Fazenda de Minas","peso":"400g","preco":"R$ 28,99"},'
        + '{"id":"24","nome":"Goiabada Cascão","descricao":"Goiabada Cascão (Jam Cascão) para dietas com insgestão controlada de açúcares","categorias":["1"],"fabricante":"Doces Fazenda de Minas","peso":"400g","preco":"R$ 28,99"},'
        + '{"id":"25","nome":"Bananinha Cremosa","descricao":"Bananinha Cremosa Sem Adição de Açúcares","categorias":["1"],"fabricante":"famoso","peso":"100g","preco":"R$ 21,99"},'
        + '{"id":"26","nome":"Goiabada Cascão","descricao":"Goiabada Cascão em barra para dietas com insgestão controlada de açúcares","categorias":["1"],"fabricante":"Doces Fazenda de Minas","peso":"500g","preco":"R$ 25,99"},'
        + '{"id":"27","nome":"Goiabada Cascão Zero Açúcar","descricao":"Goiabada Cascão em barra sem adição de açúcares","categorias":["1"],"fabricante":"Haribol","peso":"150g","preco":"R$ 21,99"},'
        + '{"id":"28","nome":"Pé de Moça Zero Açúcar","descricao":"Pé de Moça em barra sem adição de açúcares","categorias":["1"],"fabricante":"Haribol","peso":"150g","preco":"R$ 21,99"},'
        + '{"id":"29","nome":"Cocada ao Leite","descricao":"Cocada ao Leite em tablete sem adição de açúcares para dietas de ingestão controlada de açúcares","categorias":["1"],"fabricante":"Haribol","peso":"150g","preco":"R$ 21,99"},'
        + '{"id":"30","nome":"Doce de Leite","descricao":"Doce de Leite em tablete sem adição de açúcares para dietas de ingestão controlada de açúcares","categorias":["1"],"fabricante":"Haribol","peso":"150g","preco":"R$ 21,99"},'
        + '{"id":"31","nome":"YES! Milk Shake Instantâneo","descricao":"YES! Milk Shake Instantâneo - Sabor Mo","categorias":["1"],"fabricante":"Yes","peso":"80g","preco":"R$ 38,99"}'
        + ']}');
    var filtroCat = JSON.parse('{"categorias":['
        + '{"id":"1","descricao":"Doces"},'
        + '{"id":"2","descricao":"Diet"},'
        + '{"id":"3","descricao":"Zero Açucar"},'
        + '{"id":"4","descricao":"Sem adição de açúcar"},'
        + '{"id":"5","descricao":"Enriquecido com proteínas"}'
        + ']}');
    var filtroFab = JSON.parse('{"fabricante":['
        + '{"id":"1","descricao":"Haribol"},'
        + '{"id":"2","descricao":"Famoso"},'
        + '{"id":"3","descricao":"Doce Amor"},'
        + '{"id":"4","descricao":"Doces Fazenda de Minas"},'
        + '{"id":"5","descricao":"Germanos"},'
        + '{"id":"6","descricao":"Yes"}'
        + ']}');

function carregarCategorias() {
    var div1 = document.getElementById("filtro-categorias");
    criarHtmlFiltros(filtroCat.categorias,div1);
    var div2 = document.getElementById("filtro-fabricantes");
    criarHtmlFiltros(filtroFab.fabricante,div2);
}

function criarHtmlFiltros(json, div) {
    for (let i = 0; i < json.length; i++) {
        var input = document.createElement('input');
        input.type = "checkbox";
        input.value = json[i].id;
        input.name = "categorias";
        var span = document.createElement("span");
        span.innerHTML = json[i].descricao;
        div.appendChild(input);
        div.appendChild(span);
        var br = document.createElement("br");
        div.appendChild(br);
    }
}

function carregarProdutos() {
    var divProdutos = document.getElementById("produtos");
    console.log(dados);
    criarHtmlProdutos(dados.produtos, divProdutos);
}

function criarHtmlProdutos(json,divMaster) {
    var divRow = document.createElement('div');
    divRow.classList = "row";
    
    var countRow = 1;
    
    for (let i = 0; i < json.length; i++) {
        if (countRow > 3) {
            divMaster.appendChild(divRow);
            divRow = document.createElement('div');
            divRow.classList = "row";
            countRow = 1;
        }

        var divColInicial = document.createElement('div');
        var divColFinal = document.createElement('div');
        var divCol = document.createElement('div');
            
        divCol.classList = "col-md-4";
        divCol.style.textAlign = 'center';
        
        var id = json[i].id;
        var nome = json[i].nome;
        var preco = json[i].preco;
        
        var div = document.createElement('div');
        div.style.border = 'solid 1px black';
        div.style.width = '100%';
        div.style.height = '350px';
        div.style.borderRadius = '5px';
        
        var divTitulo = document.createElement('div');
        divTitulo.style.width = '100%';
        divTitulo.style.height = '40px';
        var h5 = document.createElement('h5');
        h5.innerHTML = nome;
        divTitulo.appendChild(h5);
        div.appendChild(divTitulo);

        var img = document.createElement('img');
        var divImg = document.createElement('div');
        divImg.style.paddingTop = '10px';
        divImg.style.width = '90%';
        divImg.style.height = '65%';
        
        img.src = 'resources/images/produtos/'+id+'.png';
        img.classList = "img-fluid";
        img.style.height = 'inherit';
        img.style.width = 'inherit';

        divImg.appendChild(img);
        div.appendChild(divImg);

        var span = document.createElement('span');
        span.innerHTML = preco;
        
        
        var button = document.createElement('input');
        button.type = 'button';
        button.style.backgroundColor = 'rgb(51, 255, 0)';
        button.style.borderRadius = '5px';
        button.style.border = 'solid 1px black';
        button.style.width = '50%';
        button.value = 'Comprar';
        //button.formAction = 'produto.html';
        button.setAttribute('onclick', 'javascript:carregarProduto('+id+');');
        //addEventListener('click', carregarProduto(json[i]), true);
        
        var divFooter = document.createElement('div');
        divFooter.style.width = '100%';
        divFooter.style.height = '80px';
        var br = document.createElement("br");

        divFooter.appendChild(span);
        divFooter.appendChild(br);
        divFooter.appendChild(button);
        
        div.appendChild(divFooter);
        divCol.appendChild(div);
        divRow.appendChild(divCol);
        
        countRow++;
    }
}

function carregarProduto(id) {
    window.location.href = 'produto.html?id='+id;
    console.log(json);
}

function carregarDadosProduto(id) {
    var json;
    for (let i = 0; i < dados.produtos.length; i++) {
        if (dados.produtos[i].id == id) {
            json = dados.produtos[i];
        }
    }
    var p_nome = document.getElementById("nome_produto");
    p_nome.innerHTML = json.nome;
    var img_produto = document.getElementById("img_produto");
    img_produto.src = 'resources/images/produtos/'+json.id+'.png';
    var p_descricao = document.getElementById("descricao_produto");
    p_descricao.innerHTML = json.descricao;
    var p_fabricante = document.getElementById("fabricante_produto");
    p_fabricante.innerHTML = json.fabricante;
    var p_categorias = document.getElementById("categorias_produto");
    var categoriasArr = json.categorias;
    for (let i = 0; i < categoriasArr.length; i++) {
        for (let j = 0; j < filtroCat.categorias.length; j++) {
            if (categoriasArr[i] == filtroCat.categorias[j].id) {
                p_categorias.innerHTML += filtroCat.categorias[j].descricao + " ";
            }
        }
    }

    var p_peso = document.getElementById("peso_produto");
    p_peso.innerHTML = json.peso;
    var p_preco = document.getElementById("preco_produto");
    p_preco.innerHTML = json.preco;
    var button_produto = document.getElementById("button_produto");
    button_produto.setAttribute("onclick","javascript:enviarParaCarrinho('"+json.id+"');");
}

function enviarParaCarrinho(id) {
    window.location.href = 'carrinho.html?id='+id;
}

function carregarCarrinho(id) {
    var json;
    for (let i = 0; i < dados.produtos.length; i++) {
        if (dados.produtos[i].id == id) {
            json = dados.produtos[i];
        }
    }
    var divCarrinho = document.getElementById('carrinho');

    divCarrinho.innerHTML = '';
    
    var divProduto = document.createElement('div');
    var divColuna1 = document.createElement('div');
    var divColuna2 = document.createElement('div');
    var divColuna3 = document.createElement('div');
    var divColuna6 = document.createElement('div');
    var divColuna7 = document.createElement('div');
    var divColuna8 = document.createElement('div');
    var divColuna9 = document.createElement('div');
    var divColuna10 = document.createElement('div');
    var divColuna12 = document.createElement('div');

    var buttonMais = document.createElement('input');
    var buttonMenos = document.createElement('input');
    var hr = document.createElement('hr');

    divProduto.classList = "row";
    divColuna1.classList = "col-md-1";
    divColuna2.classList = "col-md-1";
    divColuna3.classList = "col-md-3";
    divColuna6.classList = "col-md-1";
    divColuna7.classList = "col-md-1";
    divColuna8.classList = "col-md-1";
    divColuna9.classList = "col-md-1";
    divColuna10.classList = "col-md-1";
    divColuna12.classList = "col-md-2";

    divProduto.style.height = '80px';
    divProduto.style.fontSize = 'x-large';
    divProduto.style.textAlign = 'center';

    var span = document.createElement('span');
    span.innerHTML = '1)';
    divColuna1.style.paddingTop = '20px';
    divColuna1.appendChild(span);

    var img = document.createElement('img');
    img.style.maxWidth = '75px';
    img.src = 'resources/images/produtos/'+json.id+'.png';
    divColuna2.appendChild(img);

    var span2 = document.createElement('span');
    span2.innerHTML = json.nome;
    divColuna3.appendChild(span2);

    buttonMais.style.borderRadius = '5px';
    buttonMais.style.backgroundColor = 'rgb(51, 255, 0)';
    buttonMais.style.width = '40px';
    buttonMais.style.height = '40px';
    buttonMais.type = 'button';
    buttonMais.value = '+';
    buttonMais.setAttribute('onclick', 'javascript:aumentarQuantidade();');
    divColuna7.style.paddingTop = '20px';
    divColuna7.appendChild(buttonMais);

    var span3 = document.createElement('span');
    span3.innerHTML = '1';
    span3.id = 'quantidade_produto';
    divColuna8.style.paddingTop = '20px';
    divColuna8.appendChild(span3);

    buttonMenos.style.borderRadius = '5px';
    buttonMenos.style.backgroundColor = 'rgb(51, 255, 0)';
    buttonMenos.style.width = '40px';
    buttonMenos.style.height = '40px';
    buttonMenos.type = 'button';
    buttonMenos.value = '-';
    buttonMenos.setAttribute('onclick', 'javascript:diminuirQuantidade();');
    divColuna9.style.paddingTop = '20px';
    divColuna9.appendChild(buttonMenos);

    var span4 = document.createElement('span');
    span4.innerHTML = json.preco;
    span4.id = 'preco_produto';
    divColuna12.style.paddingTop = '20px';
    divColuna12.appendChild(span4);

    divProduto.appendChild(divColuna1);
    divProduto.appendChild(divColuna2);
    divProduto.appendChild(divColuna3);
    divProduto.appendChild(divColuna6);
    divProduto.appendChild(divColuna7);
    divProduto.appendChild(divColuna8);
    divProduto.appendChild(divColuna9);
    divProduto.appendChild(divColuna10);
    divProduto.appendChild(divColuna12);
    divCarrinho.appendChild(divProduto);

    divCarrinho.appendChild(hr);

    var divTotal = document.createElement('div');
    var divColunaLabelTotal = document.createElement('div');
    var divColunaTotal = document.createElement('div');
    var divColunasVazias = document.createElement('div');

    divTotal.classList = "row";
    divColunaLabelTotal.classList = "col-md-2";
    divColunaTotal.classList = "col-md-2";
    divColunasVazias.classList = "col-md-8";

    divTotal.style.height = '80px';
    divTotal.style.fontSize = 'x-large';
    divTotal.style.textAlign = 'center';
    divColunaLabelTotal.style.paddingTop = '20px';
    divColunaTotal.style.paddingTop = '20px';

    var span5 = document.createElement('span');
    span5.innerHTML = 'TOTAL';
    divColunaLabelTotal.appendChild(span5);

    var span6 = document.createElement('span');
    span6.id = 'total_produto';
    span6.innerHTML = json.preco;
    divColunaTotal.appendChild(span6);

    divTotal.appendChild(divColunaLabelTotal);
    divTotal.appendChild(divColunasVazias);
    divTotal.appendChild(divColunaTotal);

    divCarrinho.appendChild(divTotal);

    var hr2 = document.createElement('hr');

    divCarrinho.appendChild(hr2);

    var divFinalizar = document.createElement('div');
    var divColFinalizar1 = document.createElement('div');
    var divColFinalizar2 = document.createElement('div');
    var divColFinalizar3 = document.createElement('div');
    divFinalizar.classList = "row";
    divColFinalizar1.classList = "col-md-4";
    divColFinalizar2.classList = "col-md-4";
    divColFinalizar3.classList = "col-md-4";
    divFinalizar.style.height = '80px';
    
    var buttonFinalizar = document.createElement('input');
    buttonFinalizar.style.borderRadius = '5px';
    buttonFinalizar.style.backgroundColor = 'rgb(51, 255, 0)';
    buttonFinalizar.style.width = '100%';
    buttonFinalizar.style.height = '40px';
    buttonFinalizar.type = 'button';
    buttonFinalizar.value = 'FINALIZAR COMPRA';
    buttonFinalizar.setAttribute('onclick', 'javascript:finalizarCompra();');
    
    divColFinalizar2.appendChild(buttonFinalizar);
    divFinalizar.appendChild(divColFinalizar1);
    divFinalizar.appendChild(divColFinalizar2);
    divFinalizar.appendChild(divColFinalizar3);
    divCarrinho.appendChild(divFinalizar);
}

function aumentarQuantidade() {
    var quantidade_produto = document.getElementById('quantidade_produto');
    var quantidade = quantidade_produto.innerText;
    var preco_produto = document.getElementById('preco_produto');
    var preco = preco_produto.innerText;
    var preco = Number.parseFloat(preco.replace('R$','').replace(',','.'));
    var total_produto = document.getElementById('total_produto');
    var total = total_produto.innerText;
    var novaQuantidade = Number.parseInt(quantidade)+1;
    var novoTotal = (novaQuantidade)*preco;
    quantidade_produto.innerHTML = novaQuantidade;
    total_produto.innerHTML = 'R$'+novoTotal.toLocaleString('br');
}

function diminuirQuantidade() {
    var quantidade_produto = document.getElementById('quantidade_produto');
    var quantidade = quantidade_produto.innerText;
    var preco_produto = document.getElementById('preco_produto');
    var preco = preco_produto.innerText;
    var preco = Number.parseFloat(preco.replace('R$','').replace(',','.'));
    var total_produto = document.getElementById('total_produto');
    var total = total_produto.innerText;
    var novaQuantidade = Number.parseInt(quantidade)-1;
    if (novaQuantidade <= 0) {
        novaQuantidade = 0;
    }
    var novoTotal = (novaQuantidade)*preco;
    quantidade_produto.innerHTML = novaQuantidade;
    total_produto.innerHTML = 'R$'+novoTotal.toLocaleString('br');
}

function finalizarCompra() {
    window.location.href = 'finalizarCompra.html';
}