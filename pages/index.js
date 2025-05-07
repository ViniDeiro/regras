import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const rules = document.querySelectorAll('.rule');
    
    // Efeito de destaque ao passar o mouse
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
    
    const handleMouseMove = (e) => {
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
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      rules.forEach(rule => {
        rule.removeEventListener('mouseenter', () => {});
        rule.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Constituição do Mural de Regras</h1>
        <p className="subtitle">Estabelecida por Vinicius Deiró Lopes</p>
      </header>
      
      <main id="rules-container">
        <div className="rule" id="rule1">
          <div className="rule-number">Artigo 1</div>
          <div className="rule-content">
            <p>O poder de criar e estabelecer regras é atribuído exclusivamente a Vinicius Deiró Lopes, sendo esta uma prerrogativa inalienável e uma responsabilidade a ser exercida com prudência e sabedoria.</p>
          </div>
        </div>

        <div className="rule" id="rule2">
          <div className="rule-number">Artigo 2</div>
          <div className="rule-content">
            <p>Todo fato declarado será considerado verdade absoluta. Caso haja contestação, o ônus da prova recai sobre aquele que questiona a veracidade do fato previamente estabelecido.</p>
            <div className="rule-subsection">
              <div className="subsection-number">§1</div>
              <p>Na eventualidade de ser apresentada uma declaração subsequente que contradiga uma verdade anteriormente estabelecida, a nova declaração deverá ser comprovada para ter validade.</p>
            </div>
          </div>
        </div>

        <div className="rule" id="rule3">
          <div className="rule-number">Artigo 3</div>
          <div className="rule-content">
            <p>A validade de uma regra não será comprometida por eventuais erros ortográficos presentes em sua redação, prevalecendo o espírito e a intenção da norma sobre sua forma.</p>
          </div>
        </div>

        <div className="rule" id="rule4">
          <div className="rule-number">Artigo 4</div>
          <div className="rule-content">
            <p>O processo de impeachment será aplicável exclusivamente aos administradores. O criador das regras goza de imunidade plena e proteção máxima, não estando sujeito aos princípios democráticos. A transferência de poder somente ocorrerá por decisão voluntária do próprio criador.</p>
          </div>
        </div>

        <div className="rule" id="rule5">
          <div className="rule-number">Artigo 5</div>
          <div className="rule-content">
            <p>Nenhuma emenda da constituição protege contra as regras criadas. As regras criadas devem ser cumpridas e respeitadas em qualquer circunstância, sobrepondo-se a quaisquer outras normas ou provisões constitucionais existentes.</p>
          </div>
        </div>
      </main>

      <footer>
        <p>Este documento constitucional está sujeito a emendas conforme determinação de seu criador.</p>
      </footer>
    </div>
  );
} 