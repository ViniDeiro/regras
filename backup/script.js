document.addEventListener('DOMContentLoaded', () => {
    const rules = document.querySelectorAll('.rule');
    
    // Adiciona efeito de scroll suave para os artigos
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateX(0)';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer para efeito de entrada
    if ('IntersectionObserver' in window) {
        rules.forEach(rule => {
            rule.style.transform = 'translateX(-20px)';
            rule.style.transition = 'all 0.5s ease-out';
            observer.observe(rule);
        });
    }
    
    // Adiciona efeito de destaque ao passar o mouse
    rules.forEach(rule => {
        rule.addEventListener('mouseenter', () => {
            rule.style.boxShadow = '0 5px 15px rgba(166, 124, 82, 0.2)';
            rule.style.borderLeft = '3px solid var(--secondary-color)';
            rule.style.paddingLeft = '10px';
        });
        
        rule.addEventListener('mouseleave', () => {
            rule.style.boxShadow = 'none';
            rule.style.borderLeft = 'none';
            rule.style.paddingLeft = '0';
        });
    });
    
    // Efeito de luz no cabeçalho
    const header = document.querySelector('header');
    
    document.addEventListener('mousemove', (e) => {
        if (!header) return;
        
        const headerRect = header.getBoundingClientRect();
        const mouseX = e.clientX - headerRect.left;
        const mouseY = e.clientY - headerRect.top;
        
        if (
            mouseX >= 0 && 
            mouseX <= headerRect.width && 
            mouseY >= 0 && 
            mouseY <= headerRect.height
        ) {
            const x = mouseX / headerRect.width;
            const y = mouseY / headerRect.height;
            
            header.style.background = 
                `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
                rgba(166, 124, 82, 0.2) 0%, 
                var(--primary-color) 50%)`;
        } else {
            header.style.background = 'var(--primary-color)';
        }
    });
    
    // Adiciona classe para indicar que o JavaScript está ativo
    document.body.classList.add('js-enabled');
}); 