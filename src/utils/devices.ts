export function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

// Función para detectar si el dispositivo es Android
export function isAndroid() {
  return /Android/.test(navigator.userAgent);
}
