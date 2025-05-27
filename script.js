// JavaScript para a página NIVELA - Guia Completo para Distribuidores

document.addEventListener('DOMContentLoaded', function() {
    // Navegação por abas
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover classe active de todas as abas
            tabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active na aba clicada
            tab.classList.add('active');
            
            // Mostrar conteúdo correspondente
            const tabId = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                    // Scroll suave para o topo da seção
                    window.scrollTo({
                        top: content.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    
    // Funcionalidade de acordeão para FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle classe active na pergunta
            question.classList.toggle('active');
            
            // Toggle classe active na resposta
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
    
    // Animação ao scroll para elementos
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .stat-card, .layer, .benefit-item, .argument-card, .support-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos com opacidade 0
    const elementsToAnimate = document.querySelectorAll('.feature-card, .stat-card, .layer, .benefit-item, .argument-card, .support-item');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Executar animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Funcionalidade de busca (placeholder para implementação futura)
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // Implementação de busca aqui
            console.log('Buscando por:', searchTerm);
        });
    }
});
