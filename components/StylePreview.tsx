import React from 'react';
import { ShapeStyle } from '../types';
import { Heart, ShoppingCart, Bell } from 'lucide-react';

interface StylePreviewProps {
  style: ShapeStyle;
}

const StylePreview: React.FC<StylePreviewProps> = ({ style }) => {
  const getContainerStyle = () => {
    if (style.customStyle) {
      return style.customStyle;
    }
    return {};
  };

  const getButtonStyle = () => {
    if (style.id === 'geometric') {
      return {
        clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
      };
    }
    return {};
  };

  const getImageStyle = () => {
    if (style.id === 'organic') {
      return {
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      };
    }
    return {};
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-12">
      <div className="w-full max-w-2xl space-y-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">{style.name}</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">{style.feeling}</p>
        </div>

        <div
          className={`bg-black p-8 ${style.containerClass} transition-all duration-500`}
          style={getContainerStyle()}
        >
          <div className="space-y-6">

            <div className={`aspect-video bg-gradient-to-br from-gray-800 to-gray-900 ${style.imageClass}`} style={getImageStyle()} />

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Ingresa tu email"
                className={`w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors ${style.inputClass}`}
              />

              <div className="flex gap-3">
                <button
                  className={`flex-1 px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all ${style.buttonClass}`}
                  style={getButtonStyle()}
                >
                  Botón Principal
                </button>

                <button
                  className={`px-4 py-3 border border-white hover:bg-white hover:text-black transition-all ${style.buttonClass}`}
                  style={getButtonStyle()}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <button className={`p-3 border border-gray-700 hover:border-white transition-colors ${style.buttonClass}`}>
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className={`p-3 border border-gray-700 hover:border-white transition-colors ${style.buttonClass}`}>
                <Bell className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        <div className="text-center text-xs text-gray-600 pt-4">
          <p>Vista previa interactiva del estilo {style.name}</p>
        </div>

      </div>
    </div>
  );
};

export default StylePreview;
