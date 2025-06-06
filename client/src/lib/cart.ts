// Centralized cart session management
export const getCartSessionId = (): string => {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('cart-session');
  if (!sessionId) {
    sessionId = 'cart-' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('cart-session', sessionId);
  }
  return sessionId;
};

export const clearCartSession = (): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('cart-session');
  }
};