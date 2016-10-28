export function toDataUrl (file) {
  return window.URL.createObjectURL(file)
}

export function toDataUrlFromBuffer (data) {
  var arrayBufferView = new Uint8Array(data)
  var blob = new Blob([arrayBufferView], { type: 'image/png' })
  return toDataUrl(blob)
}

