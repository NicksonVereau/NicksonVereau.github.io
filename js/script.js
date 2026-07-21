const diccionarios = {
    es: {
        titulo_carpinteria: "Carpintería",
        subtitulo_header: "Taller artesanal de muebles de madera",
        desc_header: "Fabricamos muebles para sala, comedor y dormitorio. Cada pieza trabajada con precisión y tradición familiar en San Ignacio.",
        nav_inicio: "Inicio",
        nav_nosotros: "Nosotros",
        nav_catalogo: "Catálogo",
        nav_testimonios: "Testimonios",
        nav_taller: "Taller",
        nav_contacto: "Contacto",
        nav_cotizador: "Cotizador",
        nav_reserva: "Reserva",
        nav_tema: "Tema",
        nav_login: "Login",
        nav_compartir: "Compartir",
        
        tit_nosotros: "Sobre Nosotros",
        desc_nosotros: "Somos una carpintería familiar con más de 20 años de experiencia en la elaboración de muebles de madera en San Ignacio. Lo que comenzó como un pequeño taller de barrio se ha convertido en un referente de dedicación y excelencia. Trabajamos cada pieza con técnicas artesanales combinadas con precisión moderna, seleccionando maderas de primera calidad para garantizar máxima durabilidad y un acabado estético inmejorable. Nuestro mayor compromiso es escuchar tus necesidades y transformar tus ideas en muebles únicos y funcionales que brinden calidez a tu hogar por generaciones.",
        
        tit_catalogo: "Nuestros Muebles",
        prod_mesa: "Mesa",
        prod_mesa_desc: "Mesa de diseño clásico y estructura robusta. Ideal para reuniones familiares o como amplio espacio de trabajo, destacando la veta natural de la madera.",
        prod_escritorio: "Escritorio",
        prod_escritorio_desc: "Escritorio funcional con tres cajones laterales. Perfecto para optimizar tu espacio de estudio o trabajo con un toque de elegancia artesanal.",
        prod_puerta: "Puerta",
        prod_puerta_desc: "Puerta de madera maciza con paneles clásicos y detalles superiores en vidrio. Brinda seguridad, aislamiento y un recibimiento cálido a tu hogar.",
        prod_vitrina: "Vitrina",
        prod_vitrina_desc: "Elegante vitrina con puertas de cristal y estantes interiores. Diseñada para exhibir y proteger tu vajilla, libros o colecciones más preciadas.",
        prod_comoda: "Cómoda",
        prod_comoda_desc: "Práctico mueble organizador con amplios cajones superiores y puertas inferiores. Combina gran capacidad de almacenaje con un acabado refinado.",
        prod_cama: "Cama",
        prod_cama_desc: "Estructura de cama resistente con somier de listones y una cabecera multifuncional que incluye prácticos compartimentos para organizar tus objetos.",
        btn_cotizar: "Cotizar",
        
        tit_testimonios: "Testimonios",
        testimonio1: '"Excelente calidad, la mesa que pedí superó mis expectativas. Muy profesionales y atentos."',
        testimonio1_autor: "— Juan Pérez",
        testimonio2: '"Compré un ropero y estoy encantado. El diseño y los acabados son impecables."',
        testimonio2_autor: "— María López",
        
        tit_reserva: "Reserva tu Pedido",
        reserva_desc: "Cuéntanos qué mueble necesitas y te contactaremos para coordinar los detalles.",
        lbl_nombre: "Nombre completo:",
        lbl_correo: "Correo electrónico:",
        lbl_mueble: "Tipo de mueble:",
        opt_seleccionar: "Selecciona una opción",
        opt_sala: "Sala",
        opt_comedor: "Comedor",
        opt_dormitorio: "Dormitorio",
        opt_otro: "Otro",
        lbl_detalles: "Detalles:",
        lbl_tel: "Teléfono:",
        btn_enviar_reserva: "Enviar Reserva",
        btn_cotizador_reserva: "Abrir cotizador",
        
        tit_taller: "Nuestro Taller",
        desc_taller: "Conoce las máquinas y herramientas que utilizamos para crear tus muebles con precisión y calidad.",
        tit_maquinas: "Máquinas Industriales",
        maq_1_tit: "Sierra Circular",
        maq_1_desc: "Fundamental para realizar cortes longitudinales y transversales precisos en madera maciza. Optimiza el tiempo y garantiza exactitud en el despiece.",
        maq_2_tit: "Desgrosadora",
        maq_2_desc: "Calibra la madera dándole un grosor exacto y paralelo. Esencial para obtener piezas uniformes listas para un ensamblaje perfecto.",
        maq_3_tit: "Garlopa",
        maq_3_desc: "Crea una superficie perfectamente plana y un canto a 90 grados. Es el primer paso crucial antes de regruesar cualquier pieza.",
        maq_4_tit: "Torno",
        maq_4_desc: "Permite tornear y esculpir piezas cilíndricas, ideal para fabricar patas de mesas, sillas y elementos decorativos con acabados artesanales.",
        maq_5_tit: "Sierra de Cinta",
        maq_5_desc: "Ofrece una versatilidad excepcional para realizar cortes curvos, perfiles irregulares y reaserrado de piezas con gran precisión.",
        maq_6_tit: "Máquina Tupi",
        maq_6_desc: "Moldea perfiles, ranuras y molduras decorativas en los cantos de la madera, aportando un acabado profesional y elegante a cada mueble.",
        
        tit_herramientas: "Herramientas Manuales",
        herr_1_tit: "Herramienta Formones",
        herr_1_desc: "Herramientas de precisión indispensables para realizar tallados, ajustes manuales y ensambles tradicionales (como cajas y espigas).",
        herr_2_tit: "Herramienta Escuadras",
        herr_2_desc: "Instrumento de comprobación vital para garantizar la perpendicularidad y el trazado exacto a 90° y 45° en la construcción del mueble.",
        herr_3_tit: "Herramienta Serrucho",
        herr_3_desc: "Herramienta clásica de corte manual, perfecta para ajustes rápidos y trabajos donde se requiere el tacto y control del carpintero.",
        herr_4_tit: "Cinta Métrica",
        herr_4_desc: "Elemento básico de medición que asegura la precisión absoluta en el marcado, despiece y montaje de las estructuras.",
        
        tit_epps: "Equipos de Protección",
        epp_1_tit: "Botas de Seguridad",
        epp_1_desc: "Equipadas con puntera reforzada y suela antideslizante, brindan protección esencial contra la caída de madera pesada y herramientas.",
        epp_2_tit: "Casco de Protección",
        epp_2_desc: "Garantiza la seguridad craneal del artesano ante posibles golpes accidentales o caída de materiales en zonas de almacenamiento.",
        epp_3_tit: "Mascarilla Protectora",
        epp_3_desc: "Filtra eficazmente el aserrín, las partículas finas y los vapores de barnices, cuidando la salud respiratoria durante toda la jornada.",
        
        tit_cotizador: "Cotizador de Muebles",
        lbl_cot_mueble: "Mueble:",
        cot_opt_mesa: "Mesa",
        cot_opt_escritorio: "Escritorio",
        cot_opt_puerta: "Puerta",
        cot_opt_vitrina: "Vitrina",
        cot_opt_comoda: "Cómoda",
        cot_opt_cama: "Cama",
        lbl_cot_madera: "Madera:",
        lbl_cot_ancho: "Ancho (cm):",
        lbl_cot_alto: "Alto (cm):",
        btn_agregar_cot: "Agregar a la cotización",
        th_mueble: "Mueble",
        th_madera: "Madera",
        th_medidas: "Medidas",
        th_precio: "Precio",
        th_accion: "Acción",
        txt_total: "Total: S/",
        btn_guardar_cot: "Guardar cotización",
        
        tit_login: "Iniciar Sesión",
        desc_login: "Ingresa usando tus redes sociales",
        btn_google: "Continuar con Google",
        btn_facebook: "Continuar con Facebook",
        
        tit_compartir: "Compartir Página",
        desc_compartir: "Escanea el código QR o comparte directamente en tus redes.",
        btn_wa: "Compartir en WhatsApp",
        btn_fb: "Compartir en Facebook",
        
        cont_dir: "Dirección:",
        cont_tel: "Teléfono:",
        foot_autor: "De: Julio C. Vereau Gerónimo",
        foot_der: "© 2026 Carpintería Vereau. Todos los derechos reservados.",
        
        err_nombre: "Ingresa un nombre válido.",
        err_correo: "Debes ingresar un correo válido que contenga '@'.",
        err_obligatorio: "Este campo es obligatorio.",
        err_tel: "Ingresa un teléfono válido de 9 dígitos."
    },
    en: {
        titulo_carpinteria: "Carpentry",
        subtitulo_header: "Handcrafted wooden furniture workshop",
        desc_header: "We manufacture furniture for living rooms, dining rooms, and bedrooms. Each piece is crafted with precision and family tradition in San Ignacio.",
        nav_inicio: "Home",
        nav_nosotros: "About",
        nav_catalogo: "Catalog",
        nav_testimonios: "Testimonials",
        nav_taller: "Workshop",
        nav_contacto: "Contact",
        nav_cotizador: "Quote",
        nav_reserva: "Booking",
        nav_tema: "Theme",
        nav_login: "Login",
        nav_compartir: "Share",
        
        tit_nosotros: "About Us",
        desc_nosotros: "We are a family-owned carpentry workshop with over 20 years of experience in crafting wooden furniture in San Ignacio. What started as a small neighborhood workshop has become a benchmark of dedication and excellence. We craft each piece using traditional artisanal techniques combined with modern precision, selecting top-quality woods to guarantee maximum durability and an unbeatable aesthetic finish. Our greatest commitment is to listen to your needs and transform your ideas into unique, functional furniture that brings warmth to your home for generations.",
        
        tit_catalogo: "Our Furniture",
        prod_mesa: "Table",
        prod_mesa_desc: "Classic design table with a robust structure. Ideal for family gatherings or as a large workspace, highlighting the natural wood grain.",
        prod_escritorio: "Desk",
        prod_escritorio_desc: "Functional desk with three side drawers. Perfect for optimizing your study or work space with a touch of handcrafted elegance.",
        prod_puerta: "Door",
        prod_puerta_desc: "Solid wood door with classic panels and upper glass details. Provides security, insulation, and a warm welcome to your home.",
        prod_vitrina: "Display Cabinet",
        prod_vitrina_desc: "Elegant display cabinet with glass doors and inner shelves. Designed to showcase and protect your tableware, books, or most precious collections.",
        prod_comoda: "Dresser",
        prod_comoda_desc: "Practical organizer cabinet with large upper drawers and lower doors. Combines great storage capacity with a refined finish.",
        prod_cama: "Bed",
        prod_cama_desc: "Sturdy bed frame with slatted base and a multifunctional headboard that includes practical compartments to organize your belongings.",
        btn_cotizar: "Quote",
        
        tit_testimonios: "Testimonials",
        testimonio1: '"Excellent quality, the table I ordered exceeded my expectations. Very professional and attentive."',
        testimonio1_autor: "— Juan Pérez",
        testimonio2: '"I bought a wardrobe and I am delighted. The design and finishes are flawless."',
        testimonio2_autor: "— María López",
        
        tit_reserva: "Book your Order",
        reserva_desc: "Tell us what furniture you need and we will contact you to coordinate details.",
        lbl_nombre: "Full Name:",
        lbl_correo: "Email Address:",
        lbl_mueble: "Furniture Type:",
        opt_seleccionar: "Select an option",
        opt_sala: "Living Room",
        opt_comedor: "Dining Room",
        opt_dormitorio: "Bedroom",
        opt_otro: "Other",
        lbl_detalles: "Details:",
        lbl_tel: "Phone:",
        btn_enviar_reserva: "Send Booking",
        btn_cotizador_reserva: "Open quoter",
        
        tit_taller: "Our Workshop",
        desc_taller: "Discover the machines and tools we use to create your furniture with precision and quality.",
        tit_maquinas: "Industrial Machines",
        maq_1_tit: "Circular Saw",
        maq_1_desc: "Fundamental for making precise longitudinal and cross cuts in solid wood. Optimizes time and guarantees accuracy in cutting.",
        maq_2_tit: "Thickness Planer",
        maq_2_desc: "Calibrates the wood giving it an exact and parallel thickness. Essential for obtaining uniform pieces ready for perfect assembly.",
        maq_3_tit: "Jointer",
        maq_3_desc: "Creates a perfectly flat surface and a 90-degree edge. It is the crucial first step before thickness planing any piece.",
        maq_4_tit: "Lathe",
        maq_4_desc: "Allows turning and sculpting cylindrical pieces, ideal for manufacturing table legs, chairs, and decorative elements with handcrafted finishes.",
        maq_5_tit: "Band Saw",
        maq_5_desc: "Offers exceptional versatility for curved cuts, irregular profiles, and resawing pieces with great precision.",
        maq_6_tit: "Wood Shaper",
        maq_6_desc: "Shapes profiles, grooves, and decorative moldings on wood edges, providing a professional and elegant finish to each piece of furniture.",
        
        tit_herramientas: "Hand Tools",
        herr_1_tit: "Chisels",
        herr_1_desc: "Indispensable precision tools for carving, manual adjustments, and traditional joinery (such as mortise and tenon).",
        herr_2_tit: "Squares",
        herr_2_desc: "Vital checking instrument to guarantee perpendicularity and exact 90° and 45° layouts in furniture construction.",
        herr_3_tit: "Handsaw",
        herr_3_desc: "Classic hand cutting tool, perfect for quick adjustments and work where the carpenter's touch and control are required.",
        herr_4_tit: "Measuring Tape",
        herr_4_desc: "Basic measuring element that ensures absolute precision in marking, cutting, and assembling structures.",
        
        tit_epps: "Safety Gear",
        epp_1_tit: "Safety Boots",
        epp_1_desc: "Equipped with reinforced steel toes and non-slip soles, they provide essential protection against falling heavy wood and tools.",
        epp_2_tit: "Safety Helmet",
        epp_2_desc: "Guarantees cranial safety for the craftsman against accidental bumps or falling materials in storage areas.",
        epp_3_tit: "Protective Mask",
        epp_3_desc: "Effectively filters sawdust, fine particles, and varnish vapors, protecting respiratory health throughout the workday.",
        
        tit_cotizador: "Furniture Quoter",
        lbl_cot_mueble: "Furniture:",
        cot_opt_mesa: "Table",
        cot_opt_escritorio: "Desk",
        cot_opt_puerta: "Door",
        cot_opt_vitrina: "Display Cabinet",
        cot_opt_comoda: "Dresser",
        cot_opt_cama: "Bed",
        lbl_cot_madera: "Wood:",
        lbl_cot_ancho: "Width (cm):",
        lbl_cot_alto: "Height (cm):",
        btn_agregar_cot: "Add to quote",
        th_mueble: "Furniture",
        th_madera: "Wood",
        th_medidas: "Measures",
        th_precio: "Price",
        th_accion: "Action",
        txt_total: "Total: S/",
        btn_guardar_cot: "Save quote",
        
        tit_login: "Log In",
        desc_login: "Enter using your social networks",
        btn_google: "Continue with Google",
        btn_facebook: "Continue with Facebook",
        
        tit_compartir: "Share Page",
        desc_compartir: "Scan the QR code or share directly on your networks.",
        btn_wa: "Share on WhatsApp",
        btn_fb: "Share on Facebook",
        
        cont_dir: "Address:",
        cont_tel: "Phone:",
        foot_autor: "By: Julio C. Vereau Gerónimo",
        foot_der: "© 2026 Vereau Carpentry. All rights reserved.",
        
        err_nombre: "Enter a valid name.",
        err_correo: "You must enter a valid email containing '@'.",
        err_obligatorio: "This field is required.",
        err_tel: "Enter a valid 9-digit phone number."
    },
    pt: {
        titulo_carpinteria: "Carpintaria",
        subtitulo_header: "Oficina artesanal de móveis de madeira",
        desc_header: "Fabricamos móveis para sala, sala de jantar e quarto. Cada peça é trabalhada com precisão e tradição familiar em San Ignacio.",
        nav_inicio: "Início",
        nav_nosotros: "Sobre",
        nav_catalogo: "Catálogo",
        nav_testimonios: "Depoimentos",
        nav_taller: "Oficina",
        nav_contacto: "Contato",
        nav_cotizador: "Orçamento",
        nav_reserva: "Reserva",
        nav_tema: "Tema",
        nav_login: "Entrar",
        nav_compartir: "Compartilhar",
        
        tit_nosotros: "Sobre Nós",
        desc_nosotros: "Somos uma carpintaria familiar com mais de 20 anos de experiência na elaboração de móveis de madeira em San Ignacio. O que começou como uma pequena oficina de bairro tornou-se uma referência de dedicação e excelência. Trabalhamos cada peça com técnicas artesanais combinadas com precisão moderna, selecionando madeiras de primeira qualidade para garantir máxima durabilidade e um acabamento estético imbatível. Nosso maior compromisso é ouvir suas necessidades e transformar suas ideias em móveis únicos e funcionais que tragam aconchego ao seu lar por gerações.",
        
        tit_catalogo: "Nossos Móveis",
        prod_mesa: "Mesa",
        prod_mesa_desc: "Mesa de design clássico e estrutura robusta. Ideal para reuniões familiares ou como amplo espaço de trabalho, destacando o veio natural da madeira.",
        prod_escritorio: "Escrivaninha",
        prod_escritorio_desc: "Escrivaninha funcional com três gavetas laterais. Perfeita para otimizar seu espaço de estudo ou trabalho com um toque de elegância artesanal.",
        prod_puerta: "Porta",
        prod_puerta_desc: "Porta de madeira maciça com painéis clássicos e detalhes superiores em vidro. Oferece segurança, isolamento e uma recepção calorosa ao seu lar.",
        prod_vitrina: "Cristaleira",
        prod_vitrina_desc: "Elegante cristaleira com portas de vidro e prateleiras internas. Projetada para exibir e proteger suas louças, livros ou coleções mais preciosas.",
        prod_comoda: "Cômoda",
        prod_comoda_desc: "Prático móvel organizador com amplas gavetas superiores e portas inferiores. Combina grande capacidade de armazenamento com um acabamento refinado.",
        prod_cama: "Cama",
        prod_cama_desc: "Estrutura de cama resistente com estrado de ripas e uma cabeceira multifuncional que inclui compartimentos práticos para organizar seus objetos.",
        btn_cotizar: "Orçamento",
        
        tit_testimonios: "Depoimentos",
        testimonio1: '"Qualidade excelente, a mesa que pedi superou minhas expectativas. Muito profissionais e atenciosos."',
        testimonio1_autor: "— Juan Pérez",
        testimonio2: '"Comprei um guarda-roupa e estou encantado. O design e os acabamentos são impecáveis."',
        testimonio2_autor: "— María López",
        
        tit_reserva: "Reserve seu Pedido",
        reserva_desc: "Conte-nos qual móvel você precisa e entraremos em contato para coordenar os detalhes.",
        lbl_nombre: "Nome completo:",
        lbl_correo: "E-mail:",
        lbl_mueble: "Tipo de móvel:",
        opt_seleccionar: "Selecione uma opção",
        opt_sala: "Sala",
        opt_comedor: "Sala de jantar",
        opt_dormitorio: "Quarto",
        opt_otro: "Outro",
        lbl_detalles: "Detalhes:",
        lbl_tel: "Telefone:",
        btn_enviar_reserva: "Enviar Reserva",
        btn_cotizador_reserva: "Abrir orçamentista",
        
        tit_taller: "Nossa Oficina",
        desc_taller: "Conheça as máquinas e ferramentas que usamos para criar seus móveis com precisão e qualidade.",
        tit_maquinas: "Máquinas Industriais",
        maq_1_tit: "Serra Circular",
        maq_1_desc: "Fundamental para realizar cortes longitudinais e transversais precisos em madeira maciça. Otimiza o tempo e garante exatidão no corte.",
        maq_2_tit: "Desengrossadeira",
        maq_2_desc: "Calibra a madeira dando-lhe uma espessura exata e paralela. Essencial para obter peças uniformes prontas para uma montagem perfeita.",
        maq_3_tit: "Plaina",
        maq_3_desc: "Cria uma superfície perfeitamente plana e um canto a 90 graus. É o primeiro passo crucial antes de desengrossar qualquer peça.",
        maq_4_tit: "Torno",
        maq_4_desc: "Permite tornear e esculpir peças cilíndricas, ideal para fabricar pés de mesas, cadeiras e elementos decorativos com acabamentos artesanais.",
        maq_5_tit: "Serra de Fita",
        maq_5_desc: "Oferece uma versatilidade excepcional para realizar cortes curvos, perfis irregulares e desdobramento de peças com grande precisão.",
        maq_6_tit: "Máquina Tupia",
        maq_6_desc: "Molda perfis, ranhuras e molduras decorativas nos cantos da madeira, proporcionando um acabamento profissional e elegante a cada móvel.",
        
        tit_herramientas: "Ferramentas Manuais",
        herr_1_tit: "Formões",
        herr_1_desc: "Ferramentas de precisão indispensáveis para realizar entalhes, ajustes manuais e encaixes tradicionais (como respigas e malhetes).",
        herr_2_tit: "Esquadros",
        herr_2_desc: "Instrumento de verificação vital para garantir a perpendicularidade e o traçado exato a 90° e 45° na construção do móvel.",
        herr_3_tit: "Serrote",
        herr_3_desc: "Ferramenta clássica de corte manual, perfeita para ajustes rápidos e trabalhos onde se requer o tato e controle do carpinteiro.",
        herr_4_tit: "Fita Métrica",
        herr_4_desc: "Elemento básico de medição que assegura a precisão absoluta na marcação, corte e montagem das estruturas.",
        
        tit_epps: "Equipamentos de Proteção",
        epp_1_tit: "Botas de Segurança",
        epp_1_desc: "Equipadas com biqueira reforçada e sola antiderrapante, oferecem proteção essencial contra a queda de madeira pesada e ferramentas.",
        epp_2_tit: "Capacete de Proteção",
        epp_2_desc: "Garante a segurança craniana do artesão contra possíveis batidas acidentais ou queda de materiais em áreas de armazenamento.",
        epp_3_tit: "Máscara Protetora",
        epp_3_desc: "Filtra eficazmente a serragem, partículas finas e vapores de vernizes, cuidando da saúde respiratória durante toda a jornada.",
        
        tit_cotizador: "Orçamentista de Móveis",
        lbl_cot_mueble: "Móvel:",
        cot_opt_mesa: "Mesa",
        cot_opt_escritorio: "Escrivaninha",
        cot_opt_puerta: "Porta",
        cot_opt_vitrina: "Cristaleira",
        cot_opt_comoda: "Cômoda",
        cot_opt_cama: "Cama",
        lbl_cot_madera: "Madeira:",
        lbl_cot_ancho: "Largura (cm):",
        lbl_cot_alto: "Altura (cm):",
        btn_agregar_cot: "Adicionar ao orçamento",
        th_mueble: "Móvel",
        th_madera: "Madeira",
        th_medidas: "Medidas",
        th_precio: "Preço",
        th_accion: "Ação",
        txt_total: "Total: S/",
        btn_guardar_cot: "Salvar orçamento",
        
        tit_login: "Iniciar Sessão",
        desc_login: "Entre usando suas redes sociais",
        btn_google: "Continuar com o Google",
        btn_facebook: "Continuar com o Facebook",
        
        tit_compartir: "Compartilhar Página",
        desc_compartir: "Escaneie o código QR ou compartilhe diretamente em suas redes.",
        btn_wa: "Compartilhar no WhatsApp",
        btn_fb: "Compartilhar no Facebook",
        
        cont_dir: "Endereço:",
        cont_tel: "Telefone:",
        foot_autor: "Por: Julio C. Vereau Gerónimo",
        foot_der: "© 2026 Carpintaria Vereau. Todos os direitos reservados.",
        
        err_nombre: "Insira um nome válido.",
        err_correo: "Você deve inserir um e-mail válido contendo '@'.",
        err_obligatorio: "Este campo é obrigatório.",
        err_tel: "Insira um número de telefone válido com 9 dígitos."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const idiomaGuardado = localStorage.getItem('idiomaVereau') || 'es';
    const selectorIdioma = document.getElementById('selector-idioma');
    if(selectorIdioma) {
        selectorIdioma.value = idiomaGuardado;
        aplicarIdioma(idiomaGuardado); 
    }

    if (localStorage.getItem('temaVereau') === 'dark') {
        document.body.classList.add('dark-mode');
        const icono = document.querySelector('#btn-oscuro i');
        if(icono) {
            icono.classList.remove('fa-moon');
            icono.classList.add('fa-sun');
        }
    }
});

function aplicarIdioma(idioma) {
    const textos = diccionarios[idioma];
    document.querySelectorAll('[data-key]').forEach(elemento => {
        const clave = elemento.getAttribute('data-key');
        if (textos[clave]) {
            elemento.textContent = textos[clave];
        }
    });
}

document.getElementById('selector-idioma').addEventListener('change', function() {
    localStorage.setItem('idiomaVereau', this.value); 
    aplicarIdioma(this.value);
});

document.getElementById('btn-oscuro').addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');

    const icono = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icono.classList.remove('fa-moon');
        icono.classList.add('fa-sun');
        localStorage.setItem('temaVereau', 'dark'); 
    } else {
        icono.classList.remove('fa-sun');
        icono.classList.add('fa-moon');
        localStorage.setItem('temaVereau', 'light'); 
    }
});

document.getElementById('reserva-nombre').addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
});

const camposNumericos = ['reserva-telefono', 'cot-ancho', 'cot-alto'];
camposNumericos.forEach(id => {
    let elemento = document.getElementById(id);
    if (elemento) {
        elemento.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
});

document.querySelectorAll('input, select, textarea').forEach(elemento => {
    elemento.addEventListener('blur', function() {
        let idError = 'err-' + this.id;
        let msgError = document.getElementById(idError);
        let tieneError = false;

        if (this.value.trim() === '') {
            tieneError = true;
        } else if (this.id === 'reserva-correo' && !this.value.includes('@')) {
            tieneError = true;
        } else if (this.id === 'reserva-telefono' && this.value.length !== 9) {
            tieneError = true;
        }

        if (tieneError) {
            this.classList.add('input-error');
            if (msgError) msgError.style.display = 'block';
        } else {
            this.classList.remove('input-error');
            if (msgError) msgError.style.display = 'none';
        }
    });
});

const headerPrincipal = document.querySelector('header');
const navPrincipal = document.getElementById('menu-principal');

function actualizarNav() {
    if (!headerPrincipal || !navPrincipal) return;
    const limite = headerPrincipal.offsetHeight - 10;
    const visible = window.scrollY > limite;
    document.body.classList.toggle('nav-visible', visible);
    navPrincipal.classList.toggle('nav-oculto', !visible);
}

window.addEventListener('scroll', actualizarNav, { passive: true });
window.addEventListener('resize', actualizarNav);
window.addEventListener('load', actualizarNav);

actualizarNav();

document.getElementById('btn-menu').addEventListener('click', function() {
    document.getElementById('nav-enlaces').classList.toggle('activo');
});

document.querySelectorAll('#nav-enlaces a').forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth < 1024) {
            document.getElementById('nav-enlaces').classList.remove('activo');
        }
    });
});

const modalLogin = document.getElementById('ventana-login');
const botonGoogle = document.getElementById('api-google');
const botonFacebook = document.getElementById('api-facebook');

function restaurarBotonesLogin() {
    const textoGoogle = document.querySelector('[data-key="btn_google"]')?.textContent || 'Continuar con Google';
    const textoFacebook = document.querySelector('[data-key="btn_facebook"]')?.textContent || 'Continuar con Facebook';

    if (botonGoogle) {
        botonGoogle.textContent = textoGoogle;
        botonGoogle.disabled = false;
    }

    if (botonFacebook) {
        botonFacebook.textContent = textoFacebook;
        botonFacebook.disabled = false;
    }
}

document.getElementById('btn-login').addEventListener('click', function (e) {
    e.preventDefault();
    restaurarBotonesLogin();
    modalLogin.style.display = 'flex';
});

document.getElementById('cerrar-login').addEventListener('click', function () {
    modalLogin.style.display = 'none';
    restaurarBotonesLogin();
});

document.getElementById('btn-compartir').addEventListener('click', function (e) {
    e.preventDefault();
    let urlActual = window.location.href;
    let textoPersonalizado = "Visita mi página de Carpintería Vereau: " + urlActual;
    let urlLogoPublico = "https://tu-usuario.github.io/tu-repositorio/img/logo.jpg";
    let qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(urlActual)}&size=300&centerImageUrl=${encodeURIComponent(urlLogoPublico)}`;
    
    document.getElementById('qr-img').src = qrUrl;
    document.getElementById('share-wa').href = "https://api.whatsapp.com/send?text=" + encodeURIComponent(textoPersonalizado);
    document.getElementById('share-fb').href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(urlActual);
    
    document.getElementById('ventana-compartir').style.display = 'flex';
});

document.getElementById('cerrar-compartir').addEventListener('click', function () {
    document.getElementById('ventana-compartir').style.display = 'none';
});

document.getElementById('btn-descargar-qr').addEventListener('click', async function () {
    const imgSrc = document.getElementById('qr-img').src;
    const botonOriginal = this.innerHTML;
    
    try {
        this.textContent = "Descargando..."; 
        const response = await fetch(imgSrc);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'QR_Carpinteria_Vereau.png';
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        this.innerHTML = botonOriginal;
    } catch (error) {
        alert("Hubo un error al descargar el QR. Asegúrate de tener conexión a internet.");
        this.innerHTML = botonOriginal;
    }
});

function simularLoginSocial(redSocial) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: "success", user: "UsuarioPrueba", provider: redSocial });
        }, 1500);
    });
}

document.getElementById('api-google').addEventListener('click', async function() {
    this.disabled = true;
    this.textContent = "Conectando...";
    let respuesta = await simularLoginSocial("Google");
    if(respuesta.status === "success") {
        alert("Autenticación exitosa con API de " + respuesta.provider);
        modalLogin.style.display = 'none';
        restaurarBotonesLogin();
    } else {
        restaurarBotonesLogin();
    }
});

document.getElementById('api-facebook').addEventListener('click', async function() {
    this.disabled = true;
    this.textContent = "Conectando...";
    let respuesta = await simularLoginSocial("Facebook");
    if(respuesta.status === "success") {
        alert("Autenticación exitosa con API de " + respuesta.provider);
        modalLogin.style.display = 'none';
        restaurarBotonesLogin();
    } else {
        restaurarBotonesLogin();
    }
});

document.getElementById('abrir-cotizador').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('ventana-cotizador').style.display = 'flex';
});

document.getElementById('cerrar-cotizador').addEventListener('click', function () {
    document.getElementById('ventana-cotizador').style.display = 'none';
});

var totalGeneral = 0;

function persistirCotizacion() {
    var tabla = document.getElementById('tabla-cotizacion');
    var items = [];

    for (var i = 1; i < tabla.rows.length; i++) {
        var fila = tabla.rows[i];
        var precioTexto = fila.cells[3].textContent.replace(/[^0-9.-]/g, '');
        items.push({
            mueble: fila.cells[0].textContent,
            madera: fila.cells[1].textContent,
            medidas: fila.cells[2].textContent,
            precio: parseFloat(precioTexto)
        });
    }

    localStorage.setItem('cotizacionVereau', JSON.stringify({ total: totalGeneral, items: items }));
}

function restaurarCotizacionGuardada() {
    var datosGuardados = localStorage.getItem('cotizacionVereau');
    if (!datosGuardados) return;

    try {
        var datos = JSON.parse(datosGuardados);
        var tabla = document.getElementById('tabla-cotizacion').getElementsByTagName('tbody')[0];
        
        while (tabla.rows.length > 0) {
            tabla.deleteRow(0);
        }

        totalGeneral = parseFloat(datos.total) || 0;

        if (datos.items && datos.items.length > 0) {
            datos.items.forEach(function (item) {
                var fila = '<tr>' +
                    '<td>' + item.mueble + '</td>' +
                    '<td>' + item.madera + '</td>' +
                    '<td>' + item.medidas + '</td>' +
                    '<td>S/ ' + item.precio.toFixed(2) + '</td>' +
                    '<td><a href="#" style="color:#ff4d4d;" onclick="quitarFila(this, ' + item.precio + ')">Quitar</a></td>' +
                    '</tr>';
                tabla.insertRow().innerHTML = fila;
            });
        }

        document.getElementById('cot-total').innerHTML = totalGeneral.toFixed(2);
    } catch (error) {
        console.log('No se pudo restaurar la cotización guardada.', error);
    }
}

function agregarCotizacion() {
    var muebleSelect = document.getElementById('cot-mueble');
    var maderaSelect = document.getElementById('cot-madera');
    var ancho = document.getElementById('cot-ancho');
    var alto = document.getElementById('cot-alto');

    if (!muebleSelect.value || !maderaSelect.value) {
        alert('Selecciona un mueble y un tipo de madera antes de agregarlo a la cotización.');
        return;
    }

    if (ancho.value.trim() === '' || alto.value.trim() === '') {
        alert('Ingresa el ancho y el alto del mueble para continuar.');
        return;
    }

    var anchoNumero = parseFloat(ancho.value);
    var altoNumero = parseFloat(alto.value);

    if (isNaN(anchoNumero) || isNaN(altoNumero) || anchoNumero <= 0 || altoNumero <= 0) {
        alert('Por favor, ingresa medidas válidas en números mayores a cero.');
        return;
    }

    var precioBase = parseFloat(muebleSelect.value);
    var multiplicador = parseFloat(maderaSelect.value);
    var area = (anchoNumero * altoNumero) / 10000;

    var precioFinal = area * precioBase * multiplicador;
    totalGeneral = totalGeneral + precioFinal;

    var nombreMueble = muebleSelect.options[muebleSelect.selectedIndex].text;
    var nombreMadera = maderaSelect.options[maderaSelect.selectedIndex].text;

    var fila = '<tr>' +
        '<td>' + nombreMueble + '</td>' +
        '<td>' + nombreMadera + '</td>' +
        '<td>' + anchoNumero + 'x' + altoNumero + '</td>' +
        '<td>S/ ' + precioFinal.toFixed(2) + '</td>' +
        '<td><a href="#" style="color:#ff4d4d;" onclick="quitarFila(this, ' + precioFinal + ')">Quitar</a></td>' +
        '</tr>';

    var tbody = document.getElementById('tabla-cotizacion').getElementsByTagName('tbody')[0];
    tbody.insertRow().innerHTML = fila;
    
    document.getElementById('cot-total').innerHTML = totalGeneral.toFixed(2);
    persistirCotizacion();

    ancho.value = '';
    alto.value = '';
    alert('Artículo agregado a la cotización correctamente.');
}

function quitarFila(enlace, precio) {
    if (confirm("¿Está seguro de que desea eliminar este mueble de la cotización?")) {
        var fila = enlace.parentNode.parentNode;
        fila.parentNode.removeChild(fila);
        totalGeneral = totalGeneral - precio;
        document.getElementById('cot-total').innerHTML = totalGeneral.toFixed(2);
        persistirCotizacion();
    }
}

function guardarCotizacion() {
    var tbody = document.getElementById('tabla-cotizacion').getElementsByTagName('tbody')[0];
    if (tbody.rows.length === 0) {
        alert('Agrega al menos un mueble a la cotización antes de guardarla.');
        return;
    }
    persistirCotizacion();
    alert('Cotización guardada correctamente.');
}

function limpiarCotizacion() {
    if (confirm('¿Deseas limpiar la cotización actual?')) {
        var tbody = document.getElementById('tabla-cotizacion').getElementsByTagName('tbody')[0];
        while (tbody.rows.length > 0) {
            tbody.deleteRow(0);
        }
        totalGeneral = 0;
        document.getElementById('cot-total').innerHTML = '0.00';
        localStorage.removeItem('cotizacionVereau');
    }
}

function abrirCotizador(tipo) {
    document.getElementById('ventana-cotizador').style.display = 'flex';
    var select = document.getElementById('cot-mueble');
    
    if (select) {
        for (var i = 0; i < select.options.length; i++) {
            var opcionTexto = select.options[i].text.toLowerCase();
            var opcionKey = select.options[i].getAttribute('data-key') || '';
            
            if (opcionTexto.includes(tipo.toLowerCase()) || opcionKey.includes(tipo.toLowerCase())) {
                select.selectedIndex = i;
                break;
            }
        }
    }
}

restaurarCotizacionGuardada();

function enviarReserva() {
    var nombre = document.getElementById('reserva-nombre');
    var correo = document.getElementById('reserva-correo');
    var mueble = document.getElementById('reserva-mueble');
    var detalle = document.getElementById('reserva-detalle');
    var telefono = document.getElementById('reserva-telefono');

    if (nombre.value.trim() === '') {
        alert('Ingresa tu nombre completo para enviar la reserva.');
        return;
    }

    if (correo.value.trim() === '') {
        alert('Ingresa tu correo electrónico para continuar.');
        return;
    }

    if (mueble.value === '') {
        alert('Selecciona el tipo de mueble que deseas.');
        return;
    }

    if (detalle.value.trim() === '') {
        alert('Describe los detalles del mueble para completar la reserva.');
        return;
    }

    if (telefono.value.trim() === '') {
        alert('Ingresa un teléfono de contacto.');
        return;
    }

    if (!correo.value.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    if (telefono.value.length !== 9) {
        alert('El teléfono debe tener 9 números.');
        return;
    }

    alert('Gracias ' + nombre.value + ', tu reserva ha sido enviada con éxito. Nos contactaremos a ' + correo.value);

    nombre.value = '';
    correo.value = '';
    mueble.value = '';
    detalle.value = '';
    telefono.value = '';
}