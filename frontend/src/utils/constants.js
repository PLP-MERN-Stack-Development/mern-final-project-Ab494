// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    REFRESH: '/auth/refresh'
  },
  USERS: {
    BASE: '/users',
    PROFILE: '/users/profile',
    UPDATE: '/users',
    DELETE: '/users',
    AVATAR: '/users/avatar'
  },
  RESOURCES: {
    BASE: '/resources',
    BY_ID: (id) => `/resources/${id}`,
    CREATE: '/resources',
    UPDATE: (id) => `/resources/${id}`,
    DELETE: (id) => `/resources/${id}`,
    CATEGORIES: '/resources/categories',
    SEARCH: '/resources/search',
    DOWNLOAD: (id) => `/resources/${id}/download`
  },
  EVENTS: {
    BASE: '/events',
    BY_ID: (id) => `/events/${id}`,
    CREATE: '/events',
    UPDATE: (id) => `/events/${id}`,
    DELETE: (id) => `/events/${id}`,
    REGISTER: (id) => `/events/${id}/register`,
    UNREGISTER: (id) => `/events/${id}/unregister`,
    CALENDAR: '/events/calendar'
  },
  MENTORSHIPS: {
    BASE: '/mentorships',
    MENTORS: '/mentorships/mentors',
    REQUESTS: '/mentorships/requests',
    SESSIONS: '/mentorships/sessions',
    REQUEST: '/mentorships/request',
    ACCEPT: (id) => `/mentorships/${id}/accept`,
    DECLINE: (id) => `/mentorships/${id}/decline`,
    COMPLETE: (id) => `/mentorships/${id}/complete`
  },
  ANALYTICS: {
    BASE: '/analytics',
    IMPACT: '/analytics/impact',
    USERS: '/analytics/users',
    RESOURCES: '/analytics/resources',
    EVENTS: '/analytics/events',
    MENTORSHIPS: '/analytics/mentorships'
  },
  UPLOADS: {
    BASE: '/uploads',
    AVATAR: '/uploads/avatar',
    RESOURCE: '/uploads/resource'
  }
};

// Resource categories
export const RESOURCE_CATEGORIES = [
  'Career Development',
  'Entrepreneurship', 
  'Leadership',
  'Technology',
  'Healthcare',
  'Education',
  'Finance',
  'Legal Rights',
  'Mental Health',
  'Safety & Security',
  'Networking',
  'Skills Training'
];

// Event types
export const EVENT_TYPES = [
  'Workshop',
  'Seminar', 
  'Conference',
  'Webinar',
  'Networking',
  'Mentorship',
  'Training',
  'Other'
];

// Event status
export const EVENT_STATUS = {
  UPCOMING: 'upcoming',
  ONGOING: 'ongoing',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
};

// User roles
export const USER_ROLES = {
  USER: 'user',
  MENTOR: 'mentor',
  ADMIN: 'admin'
};

// Languages
export const LANGUAGES = [
  'English',
  'French',
  'Spanish',
  'Swahili',
  'Arabic',
  'Portuguese',
  'Hindi',
  'Mandarin',
  'Russian',
  'Japanese',
  'German',
  'Italian'
];

// Regions
export const REGIONS = [
  'North America',
  'South America', 
  'Europe',
  'Africa',
  'Asia',
  'Oceania',
  'Middle East',
  'Global/Online'
];

// Skills list for mentorship
export const MENTORSHIP_SKILLS = [
  'Career Planning',
  'Leadership Development',
  'Public Speaking',
  'Networking',
  'Entrepreneurship',
  'Technology Skills',
  'Communication',
  'Time Management',
  'Negotiation',
  'Project Management',
  'Marketing',
  'Sales',
  'Financial Planning',
  'Legal Advice',
  'Health & Wellness',
  'Personal Branding'
];

// Pagination defaults
export const PAGINATION = {
  DEFAULT_LIMIT: 12,
  DEFAULT_PAGE: 1,
  ADMIN_LIMIT: 50,
  SEARCH_LIMIT: 20
};

// File upload limits
export const UPLOAD_LIMITS = {
  AVATAR: {
    MAX_SIZE: 2 * 1024 * 1024, // 2MB
    ACCEPTED_FORMATS: ['image/jpeg', 'image/png', 'image/webp']
  },
  RESOURCE: {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ACCEPTED_FORMATS: ['pdf', 'doc', 'docx', 'txt', 'ppt', 'pptx', 'xls', 'xlsx']
  }
};

// Form validation patterns
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: {
    MIN_LENGTH: 6,
    REQUIRE_UPPERCASE: /[A-Z]/,
    REQUIRE_LOWERCASE: /[a-z]/,
    REQUIRE_NUMBER: /\d/,
    REQUIRE_SPECIAL: /[!@#$%^&*(),.?":{}|<>]/
  },
  PHONE: /^\+?[\d\s\-\(\)]+$/,
  URL: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  DISPLAY_WITH_TIME: 'MMM dd, yyyy - hh:mm a',
  API: 'yyyy-MM-dd',
  API_WITH_TIME: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
};

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'token',
  USER_DATA: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
  SIDEBAR_COLLAPSED: 'sidebar-collapsed'
};

// API timeout
export const API_TIMEOUT = 30000; // 30 seconds

// Local storage helpers
export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },
  
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};

// URL helpers
export const urls = {
  build: (base, params = {}) => {
    const url = new URL(base, window.location.origin);
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        url.searchParams.append(key, params[key]);
      }
    });
    return url.pathname + url.search;
  },
  
  getQueryParam: (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },
  
  setQueryParam: (param, value) => {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
  },
  
  removeQueryParam: (param) => {
    const url = new URL(window.location);
    url.searchParams.delete(param);
    window.history.pushState({}, '', url);
  }
};