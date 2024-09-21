import mongoose from "mongoose";
const NoticiaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      min: 4,
    },
    bajada: {
        type: String,
        required: true,
        min: 4,
      },
  
    texto: {
      type: String,
      required: true,
      min: 20,
    },
    resumen: {
      type: String,
      required: true,
      min: 6,
    },
    imagen: {
      
      id: {
        type: String
      },
      url: {
        type: String
      }
    },
    categoria: {
      type: String,
      required: true,
      enum: [
        "ACTUALIDAD",
        "DEPORTES",
        "TURISMO",
        "PRODUCCION",
        "INSTITUCIONAL",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Noticia || mongoose.model("Noticia", NoticiaSchema);

