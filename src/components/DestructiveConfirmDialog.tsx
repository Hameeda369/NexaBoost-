import React from 'react';
import { AlertTriangle, X, Trash2 } from 'lucide-react';

interface DestructiveConfirmDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  targetDetails?: string;
  confirmButtonText?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DestructiveConfirmDialog: React.FC<DestructiveConfirmDialogProps> = ({
  isOpen,
  title,
  description,
  targetDetails,
  confirmButtonText = 'Yes, Proceed',
  isLoading = false,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="destructive-confirm-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="destructive-confirm-modal"
        className="w-full max-w-md bg-[#121218] border border-rose-500/30 rounded-2xl p-6 shadow-2xl shadow-rose-950/50 relative overflow-hidden"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400">
            <AlertTriangle className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
              <button
                id="destructive-modal-close"
                onClick={onCancel}
                disabled={isLoading}
                className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-neutral-300 mt-2 leading-relaxed">{description}</p>

            {targetDetails && (
              <div className="mt-3 p-2.5 bg-black/40 border border-white/10 rounded-lg text-xs font-mono text-neutral-300 break-all">
                {targetDetails}
              </div>
            )}

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                id="destructive-modal-cancel"
                type="button"
                onClick={onCancel}
                disabled={isLoading}
                className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white hover:bg-white/5 border border-white/10 rounded-xl transition-all"
              >
                Cancel
              </button>

              <button
                id="destructive-modal-confirm"
                type="button"
                onClick={onConfirm}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all shadow-lg shadow-rose-600/30 disabled:opacity-50"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isLoading ? 'Processing...' : confirmButtonText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
