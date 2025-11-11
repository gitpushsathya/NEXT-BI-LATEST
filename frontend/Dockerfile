
# ---------- Next.js Frontend (Development Mode) ----------
FROM node:18-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies, ignore peer deps
RUN npm install --legacy-peer-deps

# Copy entire source code
COPY . .

# Expose Next.js default dev port
EXPOSE 3000

# Run in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]