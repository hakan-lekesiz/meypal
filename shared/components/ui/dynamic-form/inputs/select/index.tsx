"use client"

import { forwardRef } from "react"
import {
  Select as MuiSelect,
  MenuItem,
  CircularProgress,
  type SelectChangeEvent,
  type SxProps,
  type Theme,
} from "@mui/material"
import { Icons } from "../../../icons"

export type SelectOption = {
  label: string
  value: string | number
}

export interface SelectProps {
  options: SelectOption[]
  value?: string | number
  onChange?: (value: string | number) => void
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  error?: boolean
  fullWidth?: boolean
  name?: string
  id?: string
  sx?: SxProps<Theme>
}

/* ── Base container sx — Figma 102:756 ───────────────────────────── */
const baseSx: SxProps<Theme> = {
  backgroundColor: "var(--ui-color-card)",
  borderRadius: "14px",
  fontFamily: '"Inter", sans-serif',
  transition: "none",
  width: "100%",
  height: { xs: "52px", md: "56px" },

  /* outlined border — freeze at 2px / muted color in all states */
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
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-border)",
    borderWidth: "2px",
  },
  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-destructive)",
    borderWidth: "2px",
  },

  /* select inner — color handled per-render based on value */
  "& .MuiSelect-select": {
    padding: "14px 16px",
    paddingRight: "46px !important",
    fontSize: 15,
    lineHeight: "22.5px",
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    color: "var(--ui-color-foreground)",
    boxSizing: "border-box",
  },

  "& .MuiSelect-icon": {
    color: "var(--ui-color-icon)",
    right: "16px",
  },
  "&.Mui-disabled": {
    backgroundColor: "var(--ui-color-input-disabled)",
  },
  "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--ui-color-border) !important",
  },
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(
  {
    options,
    value = "",
    onChange,
    placeholder,
    disabled = false,
    loading = false,
    error = false,
    fullWidth = false,
    name,
    id,
    sx,
  },
  ref,
) {
  const handleChange = (e: SelectChangeEvent<string | number>) => {
    onChange?.(e.target.value)
  }

  const isEmpty = value === "" || value === null || value === undefined

  return (
    <MuiSelect
      ref={ref}
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
      displayEmpty
      disabled={disabled || loading}
      error={error}
      fullWidth={fullWidth}
      variant="outlined"
      IconComponent={
        loading
          ? () => (
              <CircularProgress
                size={18}
                thickness={4}
                sx={{
                  color: "var(--ui-color-muted-foreground)",
                  position: "absolute",
                  right: 16,
                  pointerEvents: "none",
                }}
              />
            )
          : Icons.ChevronIcon
      }
      data-variant="select"
      renderValue={(val) => {
        if (val === "" || val === null || val === undefined) {
          return <span>{placeholder}</span>
        }
        return options.find((o) => o.value === val)?.label ?? String(val)
      }}
      sx={[
        baseSx,
        isEmpty && {
          "& .MuiSelect-select": { color: "var(--ui-color-placeholder, #94a3b8) !important" },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: 14, sm: 15 },
            lineHeight: { xs: "21px", sm: "22.5px" },
            fontWeight: 500,
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  )
})

Select.displayName = "Select"
