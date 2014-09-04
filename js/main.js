$(document).ready(function() {

	
// DETECÇAO DE TELA

mediaQueryMobile = false;
escolhaOutroCarro = false;

if($("#menu-label-1").css("display") == "none"){
	mediaQueryMobile = true;
}
console.log("MOBILE >>>>> "+mediaQueryMobile);

// FORMATA TEXTO DO BOTAO DE REVISAO PARA MOBILE

if(mediaQueryMobile == true){
	for (r = 0; r < 6; r++) {
		$("#revisao-"+r).text(r+1+"ª");
	};
}

	//GET XML

	$.get("dados.xml", function(data) {
		// $( ".result" ).html( data );
		// alert( "XML CARREGADO COM SUCESSO" );

		var idCarro = data.getElementsByTagName("carro");
		var idVersao = data.getElementsByTagName("versao");
		var idRevisao = data.getElementsByTagName("revisao");
		var idPreco = data.getElementsByTagName("preco");

		console.log("CARROS >>>>> " + idCarro.length);
		console.log("VERSÕES >>>>> " + idVersao.length);

		// VARIAVEIS DO USUARIO

		var carroUsuario;
		var versaoUsuario;

		firstClickCarro = true;

		for (c = 0; c < idCarro.length; c++) // FOR PRO NUMERO DE CARROS
		{

			var idCarroAtt = idCarro[c].getAttribute('id-categoria');

			$("#carro-opt").append('<div id="carro-' + c + '" class="carro-option"><img src="img/cars/car-' + c + '.jpg" class="img-cars"><div class="car-label-name">' + idCarroAtt + '</div><div id="versoes-option-' + c + '" class="versoes-option versao-view"></div></div>');

			$("#carro-" + c).click(function() {
				var thisVar = $(this);
				if (escolhaOutroCarro == true) {
					console.log(escolhaOutroCarro);
				};
				$(this).animate({
					opacity: "1",
					width: "180",
					height: "210",
					lineHeight: "175",
					fontSize: "115",
					cursor: "auto"
				});
				if(mediaQueryMobile == true){
					$(".carro-option").css({marginLeft: "0px", marginTop: "0px", height: "210px"});
					$('.carro-option').css({
					    '-moz-transform': 'scale(1)',
					    '-webkit-transform': 'scale(1)',
					    cursor: "auto"
					});
				if (firstClickCarro == true) {
					$('#section-02').animate({
						height: "220px",
					});
				}
				}
				if (firstClickCarro == true) {
					$("#carro-opt").css({
						left: "50%",
						marginLeft: "-87.5px",
						height: "210px"
					});
					firstClickCarro = false;
				};
				
				$(".carro-option").not(thisVar).hide();
				$(".img-cars").css({
					width: "150px",
					left: "15px",
					top: "20px"
				});
				$(".car-label-name").css({
					display: "block",
					bottom: "180px",
					fontSize: "19px",
					backgroundColor: "#70bf41",
					color: "#fff",
					height: "30px",
					lineHeight: "33px"
				});
				$('#select-carro').css({
					cursor: "auto",
				});
				$('#select-carro').text("ESCOLHA UMA VERSÃO");
				$('#select-revisao').css({
					backgroundColor: "#F2F2F2"
				});
				$(".option-container").css({
					width: "195"
				});
				$(".versoes-option, .versao-option").css({
					display: "block"
				});
				numIdCarro = this.getAttribute("id");
				numIdCarroSplit = String(numIdCarro).split("-");
				carroUsuario = numIdCarroSplit[1];
				//console.log("carroUsuario = "+carroUsuario);
			});

			var idVersaoAtt = idCarro[c].getAttribute('id-carro');

			var versoes = idCarro[c].getElementsByTagName("versao");

			for (v = 0; v < versoes.length; v++) // FOR PRO NUMERO DE VERSOES
			{
				idVersaoAtt = data.getElementsByTagName("carro")[c].getElementsByTagName("versao")[v].getAttribute('id-carro');

				var versoesAppendDiv = $("#versoes-option-" + c);

				versoesAppendDiv.append('<div id="versao-' + v + '" class="versao-option versao-view-b format-vers-' + c + '-' + v + '"><div class="versao-text-a format-vers-txt-' + c + '-' + v + '">' + idVersaoAtt + '</div></div>');

				$(".versao-option").click(function() {
					var thisVar = $(this);
					numIdVersao = this.getAttribute("id");
					numIdVersaoSplit = String(numIdVersao).split("-");
					versaoUsuario = numIdVersaoSplit[1];
					console.log(versaoUsuario);
					$(".blocos").css({
						display: "block",
						opacity: "0"
					});
					$(".blocos").css({
						opacity: "1"
					});
					$(".carro-option-revisao").css({
						cursor: "pointer"
					});
					$(this).css({
						backgroundColor: "#70bf41"
					});
					$(".versao-option").not(thisVar).css({
						backgroundColor: "#ccc"
					});
					$('#select-carro').text("ESCOLHA UMA REVISÃO");
				});

				$(".carro-option").click(function() {
					$(".versao-view, .versao-view-b").css({
						display: "block"
					});
				});

				// DIAGRAMA VERSOES EM FUNCAO DO NUMERO VERSOES POR CARRO
				if (versoes.length == 1) {
					$(".format-vers-" + c + '-0').css({
						width: "100%"
					});
					$(".format-vers-txt-" + c + "-" + v).css({
						top: "23px"
					});
				}

				if (versoes.length == 2) {
					$(".format-vers-txt-" + c + "-" + v).css({
						top: "23px"
					});
				}

				if (versoes.length == 3) {
					$(".format-vers-" + c + '-0').css({
						width: "50%",
						height: "50%"
					});
					$(".format-vers-" + c + '-1').css({
						width: "50%",
						height: "50%"
					});
					$(".format-vers-" + c + '-2').css({
						width: "100%",
						height: "50%"
					});
				}

				if (versoes.length == 4) {
					$(".format-vers-" + c + '-0').css({
						width: "60%",
						height: "50%",
						fontSize: "13px",
						lineHeight: "9px"
					});
					$(".format-vers-" + c + '-1').css({
						width: "40%",
						height: "50%",
						fontSize: "13px",
						lineHeight: "9px"
					});
					$(".format-vers-" + c + '-2').css({
						width: "60%",
						height: "50%",
						fontSize: "13px",
						lineHeight: "9px"
					});
					$(".format-vers-" + c + '-3').css({
						width: "40%",
						height: "50%",
						fontSize: "13px",
						lineHeight: "9px"
					});
				}
				$(".format-vers-txt-4-1, .format-vers-txt-4-3").css({
					top: "2px",
					lineHeight: "12px"
				});
				//console.log("+1 carro detectado >>>>> "+idCarroAtt+" || "+idVersaoAtt+" (versão)");
			}
		}

		$(".versoes-option").click(function() {
			if(mediaQueryMobile == false){
				$("#carro-opt").animate({
					left: "50%",
					marginLeft: "-195px"
				}, 600);
			}
			if(mediaQueryMobile == true){
				$("#carro-opt").animate({
					marginLeft: "-165px"
				}, 600);
			}
			$("#revisao").css({
				left: "50%"
			});
			$("#revisao").animate({
				opacity: "1"
			});
			$(".preco-servico-hidden").css({
				display: "none"
			});
			$("#agendar-revisao").css({
				display: "none"
			});
		});

		firstClickRevisao = true;

		$(".revisao-options").click(function() {
			var thisVar = $(this);
			if (mediaQueryMobile == false) {
				$('#opcoes-container').delay(400).animate({
					top: "40px"
				});
				$("#carro-opt").animate({
					left: "0%",
					marginLeft: "0px"
				}, 600);
				$("#revisao").css({
					left: "25%"
				});
				$(".revisao-options").not(thisVar).css({
					backgroundColor: "transparent",
					color: "#ccc"
				});
			};
			if (mediaQueryMobile == true) {
				$('#section-02').animate({
					height: "410px",
				});
				$(".revisao-options").not(thisVar).css({
					backgroundColor: "#ccc"
				});
			};
			$(".preco-servico-hidden").css({
				display: "block"
			});
			$(".preco-servico-hidden").animate({
				opacity: "1"
			});
			if(firstClickRevisao == true){
				$("#agendar-revisao").animate({
					left: "50%"
				}, 600);
				$("#escolher-outro-carro").delay(1000).animate({
					left: "50%"
				}, 600);
				firstClickRevisao = false;
			};
			$(this).css({
				backgroundColor: "#70bf41",
				color: "#fff"
			});
			$('#select-carro').css({
				display: "none"
			});
			
			$("#agendar-revisao").css({
				display: "block"
			});
		});

		$(".carro-option-revisao").click(function() {
			numIdRevisao = this.getAttribute("id");
			numIdRevisaoSplit = String(numIdRevisao).split("-");
			revisaoUsuario = numIdRevisaoSplit[1];
			console.log("revisaoUsuario = "+revisaoUsuario);

			revisaoUsuarioOrdinal = parseInt(revisaoUsuario)+1;
			kmRevisaoUsuario = parseInt(revisaoUsuarioOrdinal)*6;
			console.log("kmRevisaoUsuario = "+kmRevisaoUsuario);
			$("#revisao-info").text(kmRevisaoUsuario+" MESES OU "+revisaoUsuarioOrdinal+"0.000 km");

			precoUsuario = data.getElementsByTagName("carro")[carroUsuario].getElementsByTagName("versao")[versaoUsuario].getElementsByTagName("revisao")[revisaoUsuario].getElementsByTagName("preco")[0].childNodes[0].nodeValue;
			precoUsuarioSplit = String(precoUsuario).split(" - ");
			precoUsuarioParc = precoUsuarioSplit[0];
			precoUsuarioAVista = precoUsuarioSplit[1];

			servicoUsuario = data.getElementsByTagName("carro")[carroUsuario].getElementsByTagName("versao")[versaoUsuario].getElementsByTagName("revisao")[revisaoUsuario].getElementsByTagName("servico")[0].childNodes[0].nodeValue;
			servicoUsuarioSplit = String(servicoUsuario).split(", ");

			//console.log(precoUsuario);
			//console.log(precoUsuarioAVista);
			//console.log(precoUsuario);
			//console.log(servicoUsuario);

			console.log(precoUsuario);


			$("#preco-parc").html('<p>' + precoUsuarioParc + '</p>');
			$("#preco-vista").html('<p>' + precoUsuarioAVista + '</p>');
			$("#servico-esp").html("");

			for (s = 0; s < servicoUsuarioSplit.length; s++) {
				// servicoUsuarioItem = servicoUsuarioSplit[s];
				$("#servico-esp").append('<li>' + servicoUsuarioSplit[s] + '</li>');
				//console.log(servicoUsuarioSplit[s]);
			}

			// PRINTA DADOS RESUMIDOS

			textoCarroUsuario = data.getElementsByTagName("carro")[carroUsuario].getAttribute('id-categoria');
			textoVersaoUsuario = data.getElementsByTagName("carro")[carroUsuario].getElementsByTagName("versao")[versaoUsuario].getAttribute('id-carro');
			textoRevisaoUsuario = parseInt(revisaoUsuario) + 1;
			
			$("#carro-usuario").text(textoCarroUsuario);
			$("#versao-usuario").text(textoVersaoUsuario);
			$("#revisao-usuario").text(textoRevisaoUsuario+"ª Revisão");


			console.log("textoCarroUsuario = "+textoCarroUsuario);
			console.log("textoVersaoUsuario = "+textoVersaoUsuario);
			console.log("textoRevisaoUsuario = "+textoRevisaoUsuario);

		});

		$('#tela-carregamento').delay(2000).animate({
			opacity: "0",
			zIndex: "-1"
		}, 1000);

		// INICIALIZAÇAO DA CONFIGURACAO DO CARRO DO USUÁRIO

		var headerHeight = parseInt($("#header").css("height"));
		var section1Height = parseInt($("#section-01").css("height"));
		var heightSection1Expandida = 25 + parseInt($(".option-container").css("height"));

		var scrollFormSection2 = headerHeight + section1Height;

		$("#escolher-outro-carro").click(function(){
			$('.options-container').removeAttr('style');
			$('#carro-opt').removeAttr('style');
			$(".carro-option").removeAttr('style');
			$(".car-label-name").removeAttr('style');
			$(".img-cars").removeAttr('style');
			$(".versoes-option").removeAttr('style');
			$(".carro-option").removeAttr('style');
			firstClickCarro = true;
			escolhaOutroCarro = true;
			console.log(escolhaOutroCarro);

			if (mediaQueryMobile == true) {
				$('#section-02').css({
					height: heightSection1Expandida
				});
				$('#select-carro').css({
					display: "none"
				});
			};
			if (mediaQueryMobile == false) {
				$('#section-02').animate({
					height: heightSection1Expandida + 100
				}, 1000);
			};
			$('html, body').animate({
				scrollTop: scrollFormSection2
			}, 800);
		});

		$('#select-carro, #arrow-down, #menu-label-1').click(function() {
			if (mediaQueryMobile == true) {
				$('#section-02').css({
					height: heightSection1Expandida
				});
				$('#select-carro').css({
					display: "none"
				});
			};
			if (mediaQueryMobile == false) {
				$('#section-02').animate({
					height: heightSection1Expandida + 100
				}, 1000);
			};
			$('html, body').animate({
				scrollTop: scrollFormSection2
			}, 800);
			$('#select-carro').css({
				backgroundColor: "#F2F2F2",
				color: "#666"
			});
			$('#opcoes-container').css({
				display: "block"
			});
			$('#opcoes-container').animate({
				opacity: "1",
				left: "50%"
			}, 1000);
		});

		var scrollFormHeight = scrollFormSection2 + parseInt($("#section-02").css("height"));

		$('#agendar-revisao').click(function() {
			$('html, body').animate({
				scrollTop: scrollFormHeight + 200
			}, 800);
			if (mediaQueryMobile == true) {
				$('#section-03').css({
					height: 485
				});
			};		
			$('#nome').animate({
				left: "0px"
			});
			$('#email').delay(200).animate({
				left: "0px"
			});
			$('#telefone').delay(400).animate({
				left: "0px"
			});
			$('#dados-resumidos-container').delay(2000).animate({
				opacity: "1"
			});
			$('#enviar').delay(800).animate({
				left: "0px"
			});
			
		});

	});
});