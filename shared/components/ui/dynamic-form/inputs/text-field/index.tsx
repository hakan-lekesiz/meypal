"use client"

import { forwardRef, type ReactNode } from "react"
import { TextField as MuiTextField, type SxProps, type Theme, InputAdornment } from "@mui/material"

export interface TextFieldProps {
  value?: string | number
  onChange?: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
  placeholder?: string
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  name?: string
  id?: string
  type?: string
  endAdornment?: ReactNode
  sx?: SxProps<Theme>
}

/* ── Base container sx ───────────────────────────── */
const baseSx: SxProps<Theme> = {
  backgroundColor: "var(--ui-color-card)",
  borderRadius: "14px",
  fontFamily: '"Inter", sans-serif',
  transition: "none",
  width: "100%",

  /* The root div that wraps the input */
  "& .MuiOutlinedInput-root": {
    height: { xs: "52px", md: "56px" },
    borderRadius: "14px",
    paddingRight: "6px" /* for endAdornment to sit nicely */,
  },

  /* outlined border */
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-border)",
    borderWidth: "2px",
    borderRadius: "14px",
    transition: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-border)",
    borderWidth: "2px",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-border)",
    borderWidth: "2px",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-destructive)",
    borderWidth: "2px",
  },

  /* input inner */
  "& .MuiOutlinedInput-input": {
    padding: "14px 16px",
    fontSize: 15,
    lineHeight: "22.5px",
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    color: "var(--ui-color-foreground, #0f172a)",
    boxSizing: "border-box",
    height: "100%",
    "&::placeholder": {
      color: "var(--ui-color-placeholder, #94a3b8)",
      opacity: 1,
    },
  },

  "& .MuiOutlinedInput-root.Mui-disabled": {
    backgroundColor: "var(--ui-color-input-disabled)",
  },
  "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-border) !important",
  },
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  {
    value = "",
    onChange,
    onBlur,
    onFocus,
    placeholder,
    disabled = false,
    error = false,
    fullWidth = true,
    name,
    id,
    type = "text",
    endAdornment,
    sx,
  },
  ref,
) {
  return (
    <MuiTextField
      inputRef={ref}
      name={name}
      id={id}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      variant="outlined"
      type={type}
      slotProps={{
        input: {
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : undefined,
        },
      }}
      sx={[baseSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    />
  )
})

TextField.displayName = "TextField"
