// Application Configuration
const config = {
    strapiUrl: 'https://your-strapi-instance.herokuapp.com', // Replace with your Strapi URL
    apiEndpoints: {
        posts: '/api/posts?populate=*',
        resources: '/api/resources?populate=*',
        authors: '/api/authors?populate=*',
        categories: '/api/categories',
        tags: '/api/tags'
    },
    pagination: {
        postsPerPage: 6,
        resourcesPerPage: 9
    },
    retryAttempts: 3,
    cacheTimeout: 5 * 60 * 1000 // 5 minutes
};

// Application Data from JSON (fallback content)
const fallbackData = {
    "siteConfig": {
        "name": "ArcANE",
        "description": "Archaeology: Accessibility, Networking, Engagement - Open Access Platform",
        "url": "https://your-domain.com",
        "strapiUrl": "https://your-strapi-instance.herokuapp.com",
        "defaultLocale": "en",
        "locales": ["en", "es", "fr", "de", "ar"]
    },
    "blogCategories": [
        { "slug": "casual", "name": "Casual", "description": "Accessible archaeology content for everyone" },
        { "slug": "academic", "name": "Academic", "description": "Scholarly articles and research papers" }
    ],
    "resourceTypes": [
        { "slug": "software", "name": "Software Tools" },
        { "slug": "database", "name": "Databases" },
        { "slug": "paper", "name": "Research Papers" },
        { "slug": "archive", "name": "Archives" },
        { "slug": "educational", "name": "Educational Materials" }
    ],
    "regions": [
        { "slug": "global", "name": "Global" },
        { "slug": "europe", "name": "Europe" },
        { "slug": "asia", "name": "Asia" },
        { "slug": "africa", "name": "Africa" },
        { "slug": "americas", "name": "Americas" },
        { "slug": "oceania", "name": "Oceania" },
        { "slug": "mediterranean", "name": "Mediterranean" }
    ],
    "studySections": [
        { "slug": "stratigraphy", "name": "Stratigraphy" },
        { "slug": "ceramics", "name": "Ceramics" },
        { "slug": "dating-methods", "name": "Dating Methods" },
        { "slug": "bioarchaeology", "name": "Bioarchaeology" },
        { "slug": "digital-archaeology", "name": "Digital Archaeology" },
        { "slug": "excavation", "name": "Excavation" },
        { "slug": "conservation", "name": "Conservation" }
    ],
    "translations": {
        "en": {
            "site": {
                "title": "ArcANE - Archaeology: Accessibility, Networking, Engagement",
                "description": "Open-access archaeology platform connecting professionals, students, and enthusiasts worldwide"
            },
            "nav": {
                "home": "Home",
                "blog": "Blog",
                "resources": "Resources",
                "about": "About",
                "language": "Language"
            },
            "homepage": {
                "hero": {
                    "title": "ArcANE: Archaeology for Everyone",
                    "subtitle": "Accessibility, Networking, Engagement",
                    "description": "An open-access platform connecting archaeology professionals, students, and enthusiasts worldwide. Discover resources, share knowledge, and build community.",
                    "cta": "Explore Content"
                },
                "sections": {
                    "featured_posts": "Featured Posts",
                    "featured_resources": "Featured Resources",
                    "statistics": "Our Community",
                    "newsletter": "Stay Updated"
                }
            },
            "blog": {
                "title": "Blog",
                "categories": {
                    "all": "All Posts",
                    "casual": "Casual",
                    "academic": "Academic"
                },
                "search_placeholder": "Search posts...",
                "filter_by_tags": "Filter by tags",
                "read_more": "Read More",
                "read_time": "min read",
                "published_on": "Published on",
                "by_author": "by"
            },
            "resources": {
                "title": "Resource Pool",
                "search_placeholder": "Search resources...",
                "sort_by": "Sort by",
                "filter_by": "Filter by",
                "sort_options": {
                    "alphabetical": "Alphabetical",
                    "date": "Date Added",
                    "type": "Type"
                },
                "filters": {
                    "all_types": "All Types",
                    "all_regions": "All Regions",
                    "all_sections": "All Sections"
                }
            },
            "common": {
                "loading": "Loading...",
                "error": "Something went wrong",
                "no_results": "No results found",
                "try_again": "Try Again",
                "search": "Search",
                "clear_filters": "Clear Filters"
            }
        },
        "es": {
            "site": {
                "title": "ArcANE - Arqueología: Accesibilidad, Redes, Participación",
                "description": "Plataforma de arqueología de acceso abierto que conecta profesionales, estudiantes y entusiastas en todo el mundo"
            },
            "nav": {
                "home": "Inicio",
                "blog": "Blog",
                "resources": "Recursos",
                "about": "Acerca de",
                "language": "Idioma"
            }
        }
    },
    "fallbackContent": {
        "posts": [
            {
                "id": "fallback-1",
                "title": "Understanding Pottery Shards: A Beginner's Guide",
                "excerpt": "Discover how archaeologists use pottery fragments to unlock secrets of ancient civilizations.",
                "category": "casual",
                "author": { "name": "Sarah Martinez" },
                "publishedAt": "2024-03-15",
                "tags": ["pottery", "beginners", "ceramics"],
                "readTime": 5,
                "content": "Pottery shards, or sherds as archaeologists call them, are among the most common artifacts found at archaeological sites. These ceramic fragments provide invaluable insights into past cultures, revealing information about daily life, trade networks, technological advances, and artistic traditions.\n\nWhen examining pottery shards, archaeologists look for several key features:\n\n**Temper and Fabric**: The materials added to clay to prevent cracking during firing. Common tempers include sand, crushed rock, or organic materials like grass.\n\n**Surface Treatment**: How the pot was finished - smooth, textured, painted, or glazed. This can indicate cultural preferences and technological capabilities.\n\n**Form and Function**: The shape of the original vessel can tell us about its use - storage, cooking, serving, or ritual purposes.\n\n**Decoration**: Painted designs, incised patterns, or applied elements that may have cultural or symbolic significance.\n\nFor beginners, start by observing these basic characteristics. Take detailed notes and photographs, and always work with experienced archaeologists when handling artifacts. Remember, every shard has a story to tell about the people who made and used it thousands of years ago."
            },
            {
                "id": "fallback-2",
                "title": "Digital Documentation in Modern Archaeology",
                "excerpt": "Exploring how digital tools are revolutionizing archaeological fieldwork and research methods.",
                "category": "academic",
                "author": { "name": "Dr. James Wilson" },
                "publishedAt": "2024-03-10",
                "tags": ["digital", "technology", "methodology"],
                "readTime": 12,
                "content": "The integration of digital technologies in archaeological fieldwork has revolutionized documentation practices, offering unprecedented precision and analytical capabilities. This review examines current digital tools and methodologies, evaluating their applications, benefits, and limitations in contemporary field archaeology.\n\n**Digital Documentation Landscape**\nModern archaeological projects increasingly rely on digital tools for data collection, analysis, and dissemination. These technologies range from simple tablet-based recording systems to sophisticated 3D modeling and virtual reality applications.\n\n**Core Technologies**\n\n**1. Geographic Information Systems (GIS)**\n- Spatial data management and analysis\n- Integration of excavation data with landscape context\n- Real-time mapping and GPS integration\n- Popular platforms: ArcGIS, QGIS, ArcGIS Online\n\n**2. 3D Documentation**\n- Photogrammetry for artifact and feature recording\n- Laser scanning for site documentation\n- Structure from Motion (SfM) techniques\n- Integration with CAD and modeling software\n\nFuture directions include emerging technologies such as machine learning, augmented reality, and blockchain which offer new possibilities for archaeological documentation."
            }
        ],
        "resources": [
            {
                "id": "fallback-1",
                "title": "Harris Matrix Composer",
                "description": "Digital tool for creating and managing stratigraphic sequences using the Harris Matrix methodology.",
                "type": "Software Tools",
                "region": "Global",
                "studySection": "Stratigraphy",
                "tags": ["stratigraphy", "digital tools"],
                "url": "https://example.com/harris-matrix"
            },
            {
                "id": "fallback-2", 
                "title": "Mediterranean Ceramics Database",
                "description": "Comprehensive database of Mediterranean ceramic traditions from Bronze Age to Byzantine period.",
                "type": "Databases",
                "region": "Mediterranean",
                "studySection": "Ceramics",
                "tags": ["ceramics", "database", "Mediterranean"],
                "url": "https://example.com/ceramics-db"
            }
        ]
    }
};

// Application State
let appState = {
    currentLanguage: 'en',
    currentSection: 'home',
    posts: [],
    resources: [],
    filteredPosts: [],
    filteredResources: [],
    selectedTags: [],
    selectedTypes: [],
    selectedRegions: [],
    selectedStudySections: [],
    currentPage: {
        posts: 1,
        resources: 1
    },
    isLoading: false,
    strapiConnected: false,
    cache: new Map()
};

// DOM Elements
let elements = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Initializing ArcANE application...');
    
    initializeElements();
    initializeNavigation();
    initializeLanguageSwitcher();
    initializeModal();
    initializeToast();
    
    showLoading(true);
    
    try {
        await loadInitialData();
        await initializeBlog();
        await initializeResources();
        initializeNewsletter();
        populateFeaturedContent();
        translatePage();
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
        showErrorToast('Failed to load initial content');
    } finally {
        showLoading(false);
    }
});

// Initialize DOM Elements
function initializeElements() {
    elements = {
        navLinks: document.querySelectorAll('.nav__link'),
        sections: document.querySelectorAll('.section'),
        navToggle: document.querySelector('.nav__toggle'),
        navMenu: document.querySelector('.nav__menu'),
        languageSwitcher: document.querySelector('.language-switcher'),
        modal: document.getElementById('postModal'),
        loadingOverlay: document.getElementById('loadingOverlay'),
        errorToast: document.getElementById('errorToast'),
        
        // Blog elements
        blogSearch: document.getElementById('blogSearch'),
        categoryButtons: document.querySelectorAll('[data-category]'),
        tagFilter: document.getElementById('tagFilter'),
        postsGrid: document.getElementById('postsGrid'),
        loadMorePosts: document.getElementById('loadMorePosts'),
        
        // Resources elements
        resourceSearch: document.getElementById('resourceSearch'),
        sortBy: document.getElementById('sortBy'),
        typeFilter: document.getElementById('typeFilter'),
        regionFilter: document.getElementById('regionFilter'),
        studySectionFilter: document.getElementById('studySectionFilter'),
        clearFilters: document.getElementById('clearFilters'),
        resourcesGrid: document.getElementById('resourcesGrid'),
        loadMoreResources: document.getElementById('loadMoreResources'),
        
        // Featured content
        featuredPosts: document.getElementById('featuredPosts'),
        featuredResources: document.getElementById('featuredResources'),
        
        // Newsletter
        newsletterForm: document.getElementById('newsletterForm'),
        
        // Stats
        userCount: document.getElementById('userCount'),
        postCount: document.getElementById('postCount'),
        resourceCount: document.getElementById('resourceCount'),
        countryCount: document.getElementById('countryCount')
    };
    
    console.log('DOM elements initialized');
}

// API Functions
async function fetchFromStrapi(endpoint, options = {}) {
    const cacheKey = `${endpoint}_${JSON.stringify(options)}`;
    
    // Check cache
    if (appState.cache.has(cacheKey)) {
        const cached = appState.cache.get(cacheKey);
        if (Date.now() - cached.timestamp < config.cacheTimeout) {
            return cached.data;
        }
    }
    
    try {
        const url = `${config.strapiUrl}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Cache the response
        appState.cache.set(cacheKey, {
            data,
            timestamp: Date.now()
        });
        
        appState.strapiConnected = true;
        return data;
    } catch (error) {
        console.error('Strapi fetch error:', error);
        appState.strapiConnected = false;
        throw error;
    }
}

async function loadInitialData() {
    console.log('Loading initial data...');
    
    try {
        // Try to load from Strapi first
        const [postsData, resourcesData] = await Promise.allSettled([
            fetchFromStrapi(config.apiEndpoints.posts),
            fetchFromStrapi(config.apiEndpoints.resources)
        ]);
        
        // Handle posts
        if (postsData.status === 'fulfilled') {
            appState.posts = transformStrapiPosts(postsData.value.data);
            console.log('Loaded posts from Strapi:', appState.posts.length);
        } else {
            console.warn('Using fallback posts data');
            appState.posts = fallbackData.fallbackContent.posts;
        }
        
        // Handle resources
        if (resourcesData.status === 'fulfilled') {
            appState.resources = transformStrapiResources(resourcesData.value.data);
            console.log('Loaded resources from Strapi:', appState.resources.length);
        } else {
            console.warn('Using fallback resources data');
            appState.resources = fallbackData.fallbackContent.resources;
        }
        
        // Initialize filtered arrays
        appState.filteredPosts = [...appState.posts];
        appState.filteredResources = [...appState.resources];
        
        console.log('Initial data loaded successfully');
        
    } catch (error) {
        console.error('Error loading initial data:', error);
        // Use fallback data
        appState.posts = fallbackData.fallbackContent.posts;
        appState.resources = fallbackData.fallbackContent.resources;
        appState.filteredPosts = [...appState.posts];
        appState.filteredResources = [...appState.resources];
        console.log('Using fallback data');
    }
}

// Transform Strapi data to match our expected format
function transformStrapiPosts(strapiPosts) {
    return strapiPosts.map(post => ({
        id: post.id,
        title: post.attributes.title,
        excerpt: post.attributes.excerpt,
        content: post.attributes.content,
        category: post.attributes.category?.data?.attributes?.slug || 'casual',
        author: {
            name: post.attributes.author?.data?.attributes?.name || 'Anonymous'
        },
        publishedAt: post.attributes.publishedAt,
        tags: post.attributes.tags?.data?.map(tag => tag.attributes.name) || [],
        readTime: post.attributes.readTime || 5
    }));
}

function transformStrapiResources(strapiResources) {
    return strapiResources.map(resource => ({
        id: resource.id,
        title: resource.attributes.title,
        description: resource.attributes.description,
        type: resource.attributes.type?.data?.attributes?.name || 'Unknown',
        region: resource.attributes.region?.data?.attributes?.name || 'Global',
        studySection: resource.attributes.studySection?.data?.attributes?.name || 'General',
        tags: resource.attributes.tags?.data?.map(tag => tag.attributes.name) || [],
        url: resource.attributes.url
    }));
}

// Navigation Functions
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            console.log('Navigating to section:', targetSection);
            showSection(targetSection);
            updateActiveNavLink(link);
            
            // Close mobile menu
            elements.navMenu.classList.remove('active');
            elements.navToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    elements.navToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        const isExpanded = elements.navMenu.classList.contains('active');
        elements.navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    document.addEventListener('click', (e) => {
        if (!elements.navToggle.contains(e.target) && !elements.navMenu.contains(e.target)) {
            elements.navMenu.classList.remove('active');
            elements.navToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    console.log('Navigation initialized');
}

function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    elements.sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        appState.currentSection = sectionId;
        console.log('Section shown successfully:', sectionId);
    } else {
        console.error('Section not found:', sectionId);
    }
}

function updateActiveNavLink(activeLink) {
    elements.navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Language Functions
function initializeLanguageSwitcher() {
    console.log('Initializing language switcher...');
    
    elements.languageSwitcher.addEventListener('change', (e) => {
        appState.currentLanguage = e.target.value;
        console.log('Language changed to:', appState.currentLanguage);
        translatePage();
    });
    
    console.log('Language switcher initialized');
}

function translatePage() {
    const translations = fallbackData.translations[appState.currentLanguage] || fallbackData.translations.en;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations, key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = getNestedTranslation(translations, key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    console.log('Page translated to:', appState.currentLanguage);
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => o && o[k], obj);
}

// Blog Functions
async function initializeBlog() {
    console.log('Initializing blog...');
    
    // Category filters
    elements.categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            elements.categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPostsByCategory(button.dataset.category);
        });
    });
    
    // Search functionality
    if (elements.blogSearch) {
        elements.blogSearch.addEventListener('input', debounce((e) => {
            filterPostsBySearch(e.target.value);
        }, 300));
    }
    
    // Load more functionality
    if (elements.loadMorePosts) {
        elements.loadMorePosts.addEventListener('click', loadMorePosts);
    }
    
    populateTagFilter();
    renderPosts();
    
    console.log('Blog initialized');
}

function populateTagFilter() {
    if (!elements.tagFilter) return;
    
    const allTags = [...new Set(appState.posts.flatMap(post => post.tags))];
    
    elements.tagFilter.innerHTML = allTags.map(tag => `
        <div class="tag-item">
            <input type="checkbox" id="tag-${tag.replace(/\s+/g, '-')}" value="${tag}">
            <label for="tag-${tag.replace(/\s+/g, '-')}">${tag}</label>
        </div>
    `).join('');
    
    elements.tagFilter.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                appState.selectedTags.push(e.target.value);
            } else {
                appState.selectedTags = appState.selectedTags.filter(tag => tag !== e.target.value);
            }
            filterPosts();
        });
    });
}

function filterPostsByCategory(category) {
    appState.currentPage.posts = 1;
    if (category === 'all') {
        appState.filteredPosts = [...appState.posts];
    } else {
        appState.filteredPosts = appState.posts.filter(post => post.category === category);
    }
    renderPosts();
}

function filterPostsBySearch(searchTerm) {
    appState.currentPage.posts = 1;
    const term = searchTerm.toLowerCase();
    appState.filteredPosts = appState.posts.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.author.name.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
    );
    renderPosts();
}

function filterPosts() {
    appState.currentPage.posts = 1;
    appState.filteredPosts = appState.posts.filter(post => {
        if (appState.selectedTags.length > 0) {
            return appState.selectedTags.some(tag => post.tags.includes(tag));
        }
        return true;
    });
    renderPosts();
}

function renderPosts() {
    if (!elements.postsGrid) return;
    
    const startIndex = 0;
    const endIndex = appState.currentPage.posts * config.pagination.postsPerPage;
    const postsToShow = appState.filteredPosts.slice(startIndex, endIndex);
    
    if (postsToShow.length === 0) {
        elements.postsGrid.innerHTML = `
            <div class="no-results">
                <h3>No posts found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        if (elements.loadMorePosts) {
            elements.loadMorePosts.style.display = 'none';
        }
        return;
    }
    
    elements.postsGrid.innerHTML = postsToShow.map(post => `
        <article class="post-card" data-post-id="${post.id}">
            <header class="post-card__header">
                <span class="post-card__category post-card__category--${post.category}">${post.category}</span>
                <h3 class="post-card__title">${post.title}</h3>
                <div class="post-card__meta">
                    <span>By ${post.author.name}</span>
                    <span>${formatDate(post.publishedAt)}</span>
                    <span>${post.readTime} min read</span>
                </div>
            </header>
            <div class="post-card__body">
                <p class="post-card__excerpt">${post.excerpt}</p>
                <div class="post-card__tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
    
    // Show/hide load more button
    if (elements.loadMorePosts) {
        elements.loadMorePosts.style.display = 
            endIndex < appState.filteredPosts.length ? 'block' : 'none';
    }
    
    // Add click listeners
    elements.postsGrid.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', () => {
            const postId = card.dataset.postId;
            openPostModal(postId);
        });
    });
}

function loadMorePosts() {
    appState.currentPage.posts += 1;
    renderPosts();
}

// Resources Functions
async function initializeResources() {
    console.log('Initializing resources...');
    
    // Sort functionality
    if (elements.sortBy) {
        elements.sortBy.addEventListener('change', (e) => {
            sortResources(e.target.value);
        });
    }
    
    // Search functionality
    if (elements.resourceSearch) {
        elements.resourceSearch.addEventListener('input', debounce((e) => {
            filterResourcesBySearch(e.target.value);
        }, 300));
    }
    
    // Load more functionality
    if (elements.loadMoreResources) {
        elements.loadMoreResources.addEventListener('click', loadMoreResources);
    }
    
    // Clear filters
    if (elements.clearFilters) {
        elements.clearFilters.addEventListener('click', clearAllFilters);
    }
    
    populateResourceFilters();
    renderResources();
    
    console.log('Resources initialized');
}

function populateResourceFilters() {
    // Type filter
    if (elements.typeFilter) {
        const allTypes = [...new Set(appState.resources.map(resource => resource.type))];
        elements.typeFilter.innerHTML = allTypes.map(type => `
            <div class="filter-item">
                <input type="checkbox" id="type-${type.replace(/\s+/g, '-')}" value="${type}">
                <label for="type-${type.replace(/\s+/g, '-')}">${type}</label>
            </div>
        `).join('');
    }
    
    // Region filter
    if (elements.regionFilter) {
        const allRegions = [...new Set(appState.resources.map(resource => resource.region))];
        elements.regionFilter.innerHTML = allRegions.map(region => `
            <div class="filter-item">
                <input type="checkbox" id="region-${region.replace(/\s+/g, '-')}" value="${region}">
                <label for="region-${region.replace(/\s+/g, '-')}">${region}</label>
            </div>
        `).join('');
    }
    
    // Study section filter
    if (elements.studySectionFilter) {
        const allStudySections = [...new Set(appState.resources.map(resource => resource.studySection))];
        elements.studySectionFilter.innerHTML = allStudySections.map(section => `
            <div class="filter-item">
                <input type="checkbox" id="section-${section.replace(/\s+/g, '-')}" value="${section}">
                <label for="section-${section.replace(/\s+/g, '-')}">${section}</label>
            </div>
        `).join('');
    }
    
    // Add event listeners
    const filterElements = [
        { element: elements.typeFilter, stateKey: 'selectedTypes' },
        { element: elements.regionFilter, stateKey: 'selectedRegions' },
        { element: elements.studySectionFilter, stateKey: 'selectedStudySections' }
    ];
    
    filterElements.forEach(({ element, stateKey }) => {
        if (!element) return;
        
        element.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    appState[stateKey].push(e.target.value);
                } else {
                    appState[stateKey] = appState[stateKey].filter(item => item !== e.target.value);
                }
                filterResources();
            });
        });
    });
}

function sortResources(sortBy) {
    appState.filteredResources.sort((a, b) => {
        switch (sortBy) {
            case 'alphabetical':
                return a.title.localeCompare(b.title);
            case 'date':
                return new Date(b.createdAt || '2024-01-01') - new Date(a.createdAt || '2024-01-01');
            case 'type':
                return a.type.localeCompare(b.type);
            default:
                return 0;
        }
    });
    renderResources();
}

function filterResourcesBySearch(searchTerm) {
    appState.currentPage.resources = 1;
    const term = searchTerm.toLowerCase();
    appState.filteredResources = appState.resources.filter(resource => 
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term) ||
        resource.tags.some(tag => tag.toLowerCase().includes(term))
    );
    renderResources();
}

function filterResources() {
    appState.currentPage.resources = 1;
    appState.filteredResources = appState.resources.filter(resource => {
        const typeMatch = appState.selectedTypes.length === 0 || appState.selectedTypes.includes(resource.type);
        const regionMatch = appState.selectedRegions.length === 0 || appState.selectedRegions.includes(resource.region);
        const sectionMatch = appState.selectedStudySections.length === 0 || appState.selectedStudySections.includes(resource.studySection);
        return typeMatch && regionMatch && sectionMatch;
    });
    renderResources();
}

function clearAllFilters() {
    appState.selectedTypes = [];
    appState.selectedRegions = [];
    appState.selectedStudySections = [];
    appState.currentPage.resources = 1;
    
    // Clear all checkboxes
    document.querySelectorAll('#typeFilter input, #regionFilter input, #studySectionFilter input').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    appState.filteredResources = [...appState.resources];
    renderResources();
}

function renderResources() {
    if (!elements.resourcesGrid) return;
    
    const startIndex = 0;
    const endIndex = appState.currentPage.resources * config.pagination.resourcesPerPage;
    const resourcesToShow = appState.filteredResources.slice(startIndex, endIndex);
    
    if (resourcesToShow.length === 0) {
        elements.resourcesGrid.innerHTML = `
            <div class="no-results">
                <h3>No resources found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        if (elements.loadMoreResources) {
            elements.loadMoreResources.style.display = 'none';
        }
        return;
    }
    
    elements.resourcesGrid.innerHTML = resourcesToShow.map(resource => `
        <article class="resource-card">
            <header class="resource-card__header">
                <span class="resource-card__type">${resource.type}</span>
                <h3 class="resource-card__title">${resource.title}</h3>
                <div class="resource-card__meta">
                    <div>Region: ${resource.region}</div>
                    <div>Study Section: ${resource.studySection}</div>
                </div>
            </header>
            <div class="resource-card__body">
                <p class="resource-card__description">${resource.description}</p>
            </div>
            <footer class="resource-card__footer">
                <div class="resource-card__tags">
                    ${resource.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn--primary btn--sm" onclick="window.open('${resource.url || '#'}', '_blank')">
                    Access Resource
                </button>
            </footer>
        </article>
    `).join('');
    
    // Show/hide load more button
    if (elements.loadMoreResources) {
        elements.loadMoreResources.style.display = 
            endIndex < appState.filteredResources.length ? 'block' : 'none';
    }
}

function loadMoreResources() {
    appState.currentPage.resources += 1;
    renderResources();
}

// Modal Functions
function initializeModal() {
    console.log('Initializing modal...');
    
    const modalClose = elements.modal.querySelector('.modal__close');
    const modalBackdrop = elements.modal.querySelector('.modal__backdrop');
    
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.modal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    console.log('Modal initialized');
}

function openPostModal(postId) {
    const post = appState.posts.find(p => p.id == postId);
    if (!post) {
        console.error('Post not found:', postId);
        return;
    }
    
    console.log('Opening modal for post:', post.title);
    
    const modalTitle = elements.modal.querySelector('#postModalTitle');
    const modalBody = elements.modal.querySelector('#postModalBody');
    
    modalTitle.textContent = post.title;
    modalBody.innerHTML = `
        <div class="post-meta">
            <span class="post-card__category post-card__category--${post.category}">${post.category}</span>
            <div class="post-info">
                <span>By ${post.author.name}</span>
                <span>${formatDate(post.publishedAt)}</span>
                <span>${post.readTime} min read</span>
            </div>
        </div>
        <div class="post-content">
            ${formatContent(post.content)}
        </div>
        <div class="post-tags">
            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    elements.modal.classList.remove('hidden');
    elements.modal.setAttribute('aria-hidden', 'false');
    modalTitle.focus();
}

function closeModal() {
    elements.modal.classList.add('hidden');
    elements.modal.setAttribute('aria-hidden', 'true');
}

function formatContent(content) {
    if (!content) return '';
    return content.split('\n').map(paragraph => 
        paragraph.trim() ? `<p>${paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>` : ''
    ).join('');
}

// Featured Content
function populateFeaturedContent() {
    console.log('Populating featured content...');
    
    // Featured posts (first 2 posts)
    if (elements.featuredPosts && appState.posts.length > 0) {
        const featuredPosts = appState.posts.slice(0, 2);
        elements.featuredPosts.innerHTML = featuredPosts.map(post => `
            <article class="post-card" data-post-id="${post.id}">
                <header class="post-card__header">
                    <span class="post-card__category post-card__category--${post.category}">${post.category}</span>
                    <h4 class="post-card__title">${post.title}</h4>
                    <div class="post-card__meta">
                        <span>${post.author.name}</span>
                        <span>${post.readTime} min read</span>
                    </div>
                </header>
                <div class="post-card__body">
                    <p class="post-card__excerpt">${post.excerpt.substring(0, 100)}...</p>
                </div>
            </article>
        `).join('');
        
        // Add click listeners to featured posts
        elements.featuredPosts.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', () => {
                const postId = card.dataset.postId;
                openPostModal(postId);
            });
        });
    }
    
    // Featured resources (first 2 resources)
    if (elements.featuredResources && appState.resources.length > 0) {
        const featuredResources = appState.resources.slice(0, 2);
        elements.featuredResources.innerHTML = featuredResources.map(resource => `
            <article class="resource-card">
                <header class="resource-card__header">
                    <span class="resource-card__type">${resource.type}</span>
                    <h4 class="resource-card__title">${resource.title}</h4>
                </header>
                <div class="resource-card__body">
                    <p class="resource-card__description">${resource.description.substring(0, 100)}...</p>
                </div>
            </article>
        `).join('');
    }
    
    // Update stats
    updateCommunityStats();
    
    console.log('Featured content populated');
}

function updateCommunityStats() {
    if (elements.postCount) {
        elements.postCount.textContent = appState.posts.length;
    }
    if (elements.resourceCount) {
        elements.resourceCount.textContent = appState.resources.length;
    }
}

// Newsletter Functions
function initializeNewsletter() {
    if (!elements.newsletterForm) return;
    
    console.log('Initializing newsletter...');
    
    elements.newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        try {
            // In a real implementation, this would send to Strapi or a newsletter service
            showSuccessToast('Thank you for subscribing!');
            e.target.reset();
        } catch (error) {
            showErrorToast('Failed to subscribe. Please try again.');
        }
    });
    
    console.log('Newsletter initialized');
}

// Toast Functions
function initializeToast() {
    const closeButton = elements.errorToast.querySelector('.toast__close');
    closeButton.addEventListener('click', () => {
        elements.errorToast.classList.add('hidden');
    });
}

function showErrorToast(message) {
    const messageElement = elements.errorToast.querySelector('.toast__message');
    messageElement.textContent = message;
    elements.errorToast.classList.remove('hidden');
    
    setTimeout(() => {
        elements.errorToast.classList.add('hidden');
    }, 5000);
}

function showSuccessToast(message) {
    // Create a success toast (reuse error toast structure)
    showErrorToast(message);
    elements.errorToast.style.backgroundColor = 'var(--color-success)';
    
    setTimeout(() => {
        elements.errorToast.style.backgroundColor = 'var(--color-error)';
    }, 5000);
}

// Loading Functions
function showLoading(show) {
    if (show) {
        elements.loadingOverlay.classList.remove('hidden');
    } else {
        elements.loadingOverlay.classList.add('hidden');
    }
    appState.isLoading = show;
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Quick navigation for hash links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            showSection(targetId);
            
            const correspondingNavLink = document.querySelector(`.nav__link[href="#${targetId}"]`);
            if (correspondingNavLink) {
                updateActiveNavLink(correspondingNavLink);
            }
        }
    }
});
