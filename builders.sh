#!/bin/bash
set -euo pipefail

# Verifica si la variable está definida y la ruta existe
if [[ -z "${DLUNIRE:-}" ]] || [[ ! -d "$DLUNIRE" ]]; then
    if [[ -n "${DLUNIRE:-}" ]]; then
        echo "La ruta configurada en \$DLUNIRE no existe: $DLUNIRE"
    else
        echo "La variable \$DLUNIRE no está configurada."
    fi

    while true; do
        read -rp "Ingresa la ruta del proyecto DLUnire: " input_path

        if [[ -d "$input_path" ]]; then
            DLUNIRE="$input_path"
            break
        else
            echo "La ruta '$input_path' no existe. Intenta de nuevo."
        fi
    done

    # Persiste la variable en .bashrc y .zshrc, evitando duplicados
    export_line="export DLUNIRE=\"$DLUNIRE\""

    for rc_file in "$HOME/.bashrc" "$HOME/.zshrc"; do
        if [[ -f "$rc_file" ]]; then
            if grep -q '^export DLUNIRE=' "$rc_file"; then
                # Reemplaza la línea existente
                sed -i "s|^export DLUNIRE=.*|$export_line|" "$rc_file"
                echo "Actualizado \$DLUNIRE en $rc_file"
            else
                # Agrega la línea nueva
                echo "" >> "$rc_file"
                echo "# Ruta del proyecto DLUnire" >> "$rc_file"
                echo "$export_line" >> "$rc_file"
                echo "Agregado \$DLUNIRE a $rc_file"
            fi
        fi
    done

    echo "Listo. Reinicia tu terminal o corré 'source $HOME/.bashrc' (o .zshrc) para futuras sesiones."
fi

rsync -av ./dist "$DLUNIRE"
