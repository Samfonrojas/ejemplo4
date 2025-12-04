import React, { useState } from 'react';
import { SHAPE_STYLES } from './constants';
import StylePreview from './components/StylePreview';
import { Info, ArrowRightCircle } from 'lucide-react';

const App: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>(SHAPE_STYLES[0].id);

  const currentStyle = SHAPE_STYLES.find(s => s.id === selectedStyleId) || SHAPE_STYLES[0];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT PANEL: Navigation & Description */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col border-r border-white/10 h-screen overflow-y-auto">
        
        {/* Header */}
        <div className="p-8 border-b border-white/10">
          <h1 className="text-4xl font-serif font-bold mb-2 tracking-tight">MonoShape.</h1>
          <p className="text-gray-500 text-sm">Guía comparativa de estilos UI</p>
        </div>

        {/* Style List */}
        <div className="flex-1 overflow-y-auto">
          {SHAPE_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyleId(style.id)}
              className={`w-full text-left p-8 border-b border-white/5 transition-all duration-300 group relative overflow-hidden ${
                selectedStyleId === style.id ? 'bg-white text-black' : 'hover:bg-gray-900'
              }`}
            >
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {style.name}
                  </h2>
                  <p className={`text-sm mb-4 ${selectedStyleId === style.id ? 'text-gray-600' : 'text-gray-400'}`}>
                    {style.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {style.idealFor.split(',').map(tag => (
                      <span 
                        key={tag} 
                        className={`text-[10px] uppercase tracking-widest border px-2 py-1 ${
                          selectedStyleId === style.id ? 'border-black text-black' : 'border-gray-700 text-gray-500'
                        }`}
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedStyleId === style.id && (
                  <ArrowRightCircle className="w-6 h-6 shrink-0 mt-1" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-6 text-xs text-gray-600 flex gap-2 items-center border-t border-white/10">
          <Info className="w-4 h-4" />
          <span>Selecciona un estilo para ver la simulación interactiva.</span>
        </div>
      </div>

      {/* RIGHT PANEL: Preview */}
      <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col h-screen bg-[#050505]">
        
        {/* Visual Preview Area */}
        <div className="flex-1 relative overflow-hidden">
           <StylePreview style={currentStyle} />
        </div>
        
      </div>
    </div>
  );
};

export default App;