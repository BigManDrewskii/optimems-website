# SVG Logo Audit - File Inventory

## Naming Convention Analysis

### Pattern 1: `-dark` / `-light` suffix (explicit dark/light variants)
- checkwatt-logo: dark ✓, light ✓
- digital-reform-logo: dark ✓, light ✓
- ellada2-logo: dark ✓, light ✓
- hellenic-democracy-logo: dark ✓, light ✓
- optimems-logo-fontmark: base ✓, dark ✓, light ✓
- optimems-logo-icon: base ✓, dark ✓, light ✓
- social-facebook: base (no suffix) ✓, dark ✓
- social-linkedin: base ✓, dark ✓
- social-x: base ✓, dark ✓
- social-youtube: base ✓, dark ✓
- society-info-logo: dark ✓, light ✓
- workflow-icon-01 through 04: dark ✓, light ✓

### Pattern 2: base / `-light` suffix (base = dark variant)
- logo01 through logo08: base ✓, light ✓
- optimems-mind: base ✓, light ✓
- optimems-solar-control: base ✓, light ✓

### Pattern 3: Single file (no theme variant)
- auth-logo-certified-light.svg (only light?)
- auth-logo-certified.svg (in sections/)
- manufactured-in-eu-logo.svg (single)
- optimems-logo.svg (single)

### Social icons naming inconsistency:
- social-facebook.svg (base) + social-facebook-dark.svg
- BUT Footer.tsx references: social-facebook.svg (for dark theme) and social-facebook-dark.svg (for light theme)
- This is INVERTED naming!
