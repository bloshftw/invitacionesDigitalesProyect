module.exports = {
  content: [
    "./index.html",
    "./templates/**/*.{html,js}"
  ],
  theme: {
    extend: {

fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
  dm: ['DM Sans', 'sans-serif'],
  nunito: ['Nunito', 'sans-serif'],
  quicksand: ['Quicksand', 'sans-serif'],
},

      colors: {
        primario: '#A5D8FF',
    secundario: '#FBC4CB',
    resaltado: '#CABDFF',
    texto: '#374151',
    fondo: '#FFF9F9',
    exito: '#C8FACC'
      },
    },
  },
  plugins: [],
}
