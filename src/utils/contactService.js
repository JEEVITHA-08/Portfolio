// Contact form submission service.
//
// This file isolates the "send" step so a real provider can be wired in
// without touching the Contact component or its validation logic.
//
// To connect EmailJS:
//   1. npm install @emailjs/browser
//   2. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
//      to a local .env file (never commit real keys).
//   3. Replace the body of submitContactForm with an emailjs.send(...) call
//      using import.meta.env.VITE_EMAILJS_* values.
//
// To connect Web3Forms:
//   1. Add VITE_WEB3FORMS_ACCESS_KEY to a local .env file.
//   2. POST formData to https://api.web3forms.com/submit with the access key
//      included in the payload, as shown in Web3Forms' docs.
//
// Never hardcode API keys or access tokens directly in source files —
// always read them from environment variables at build time.

export async function submitContactForm(formData) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID

  // No provider configured yet — this keeps the form fully functional in
  // development while the architecture is ready for a real integration.
  if (!accessKey && !serviceId) {
    await new Promise((resolve) => setTimeout(resolve, 900))
    return { success: true, simulated: true }
  }

  if (accessKey) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: accessKey, ...formData }),
    })
    const result = await response.json()
    if (!response.ok || result.success === false) {
      throw new Error(result.message || 'Message could not be sent.')
    }
    return { success: true }
  }

  // EmailJS integration point — implement when @emailjs/browser is installed.
  throw new Error('EmailJS integration is not yet implemented.')
}
