/**
 * Pickler Hamburgueria - Script de Interatividade
 * Gerencia a seleção de itens, feedback visual, busca em tempo real e navegação por categorias.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configurações gerais
  const TELEFONE_WHATSAPP = '5548912345678';
  let sacolaItens = [];

  /* ==========================================================================
     1. SISTEMA DE PEDIDOS & FEEDBACK VISUAL
     ========================================================================== */
  const botoesPedir = document.querySelectorAll('.btn-pedir');

  botoesPedir.forEach((botao) => {
    botao.addEventListener('click', (evento) => {
      const card = evento.currentTarget.closest('.hamburguer-card');
      const nomeItem = botao.getAttribute('data-item') || card.querySelector('h2')?.textContent.trim() || 'Item';
      const precoItem = botao.getAttribute('data-preco') || botao.textContent.trim();

      // Registra o item na sacola
      sacolaItens.push({ nome: nomeItem, preco: precoItem });

      // Exibe notificação tipo toast na tela
      mostrarToast(`🍔 <strong>${nomeItem}</strong> (${precoItem}) adicionado ao pedido!`);

      // Feedback háptico/animado no botão
      botao.style.transform = 'scale(0.94)';
      botao.style.filter = 'brightness(1.15)';
      setTimeout(() => {
        botao.style.transform = '';
        botao.style.filter = '';
      }, 180);
    });
  });

  /**
   * Exibe um Toast Notification flutuante moderno
   * @param {string} mensagem - Texto/HTML a ser exibido
   */
  function mostrarToast(mensagem) {
    const toastExistente = document.querySelector('.pickler-toast');
    if (toastExistente) {
      toastExistente.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'pickler-toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <div>${mensagem}</div>`;

    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast && toast.parentNode) {
        toast.remove();
      }
    }, 3000);
  }

  /* ==========================================================================
     2. BUSCA EM TEMPO REAL NO CARDÁPIO
     ========================================================================== */
  const campoBusca = document.getElementById('campo-busca');
  const btnLimparBusca = document.getElementById('btn-limpar-busca');
  const btnResetBusca = document.getElementById('btn-reset-busca');
  const feedbackSemResultados = document.getElementById('busca-sem-resultados');
  const secoesCardapio = document.querySelectorAll('.card-section');
  const todosOsCards = document.querySelectorAll('.hamburguer-card');

  /**
   * Remove acentos e converte para minúsculas
   */
  function normalizarTexto(texto) {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function filtrarCardapio() {
    const termoBusca = normalizarTexto(campoBusca.value);

    // Exibe ou oculta o botão de limpar pesquisa
    if (btnLimparBusca) {
      btnLimparBusca.style.display = termoBusca.length > 0 ? 'flex' : 'none';
    }

    let totalCardsVisiveis = 0;

    secoesCardapio.forEach((secao) => {
      const cardsNaSecao = secao.querySelectorAll('.hamburguer-card');
      let cardsVisiveisNaSecao = 0;

      cardsNaSecao.forEach((card) => {
        const titulo = normalizarTexto(card.querySelector('h2')?.textContent || '');
        const descricao = normalizarTexto(card.querySelector('p')?.textContent || '');
        const preco = normalizarTexto(card.querySelector('.btn-pedir')?.getAttribute('data-preco') || '');

        const corresponde =
          termoBusca === '' ||
          titulo.includes(termoBusca) ||
          descricao.includes(termoBusca) ||
          preco.includes(termoBusca);

        if (corresponde) {
          card.style.display = 'flex';
          cardsVisiveisNaSecao++;
          totalCardsVisiveis++;
        } else {
          card.style.display = 'none';
        }
      });

      // Oculta a seção inteira se não houver cards nela
      if (cardsVisiveisNaSecao === 0 && termoBusca !== '') {
        secao.style.display = 'none';
      } else {
        secao.style.display = 'block';
      }
    });

    // Se nenhum card for encontrado em todo o cardápio
    if (feedbackSemResultados) {
      if (totalCardsVisiveis === 0 && termoBusca !== '') {
        feedbackSemResultados.style.display = 'block';
      } else {
        feedbackSemResultados.style.display = 'none';
      }
    }
  }

  function limparBusca() {
    if (campoBusca) {
      campoBusca.value = '';
      campoBusca.focus();
      filtrarCardapio();
    }
  }

  if (campoBusca) {
    campoBusca.addEventListener('input', filtrarCardapio);
  }

  if (btnLimparBusca) {
    btnLimparBusca.addEventListener('click', limparBusca);
  }

  if (btnResetBusca) {
    btnResetBusca.addEventListener('click', limparBusca);
  }

  /* ==========================================================================
     3. NAVEGAÇÃO POR ABAS / CATEGORIA (CATEGORY PILLS & SCROLL SPY)
     ========================================================================== */
  const categoryPills = document.querySelectorAll('.category-pill');

  categoryPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      const categoria = pill.getAttribute('data-categoria');

      // Se for botão "Todos", limpa a busca e rola suavemente para o início do menu
      if (categoria === 'todos') {
        e.preventDefault();
        limparBusca();
        atualizarPillAtiva(pill);
        const heroBanner = document.querySelector('.hero-banner');
        if (heroBanner) {
          heroBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      // Se for link de categoria específica
      const targetId = pill.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSecao = document.querySelector(targetId);
        if (targetSecao) {
          e.preventDefault();
          // Se houver busca ativa, limpa para mostrar a seção
          if (campoBusca && campoBusca.value !== '') {
            campoBusca.value = '';
            filtrarCardapio();
          }
          atualizarPillAtiva(pill);
          targetSecao.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  function atualizarPillAtiva(pillAtiva) {
    categoryPills.forEach((p) => p.classList.remove('active'));
    pillAtiva.classList.add('active');

    // Centraliza o pill ativo no scroll horizontal do container (em telas móveis)
    const container = pillAtiva.closest('.category-pills');
    if (container) {
      const offset = pillAtiva.offsetLeft - container.offsetWidth / 2 + pillAtiva.offsetWidth / 2;
      container.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }

  // ScrollSpy para atualizar o pill ativo conforme o usuário rola a página
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  };

  const secoesObserver = new IntersectionObserver((entries) => {
    // Não ativa se houver texto na busca para evitar conflito
    if (campoBusca && campoBusca.value.trim() !== '') return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const pillCorrespondente = document.querySelector(`.category-pill[href="#${id}"]`);
        if (pillCorrespondente) {
          categoryPills.forEach((p) => p.classList.remove('active'));
          pillCorrespondente.classList.add('active');

          const container = pillCorrespondente.closest('.category-pills');
          if (container) {
            const offset = pillCorrespondente.offsetLeft - container.offsetWidth / 2 + pillCorrespondente.offsetWidth / 2;
            container.scrollTo({ left: offset, behavior: 'smooth' });
          }
        }
      }
    });
  }, observerOptions);

  secoesCardapio.forEach((secao) => {
    secoesObserver.observe(secao);
  });
});
