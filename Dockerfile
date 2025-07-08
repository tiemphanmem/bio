# Stage 1: Build ứng dụng
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Build ứng dụng (sử dụng Turbo nếu cần)
RUN npm run build

# Stage 2: Production image nhẹ
FROM node:20-alpine3.21

WORKDIR /app

# Chỉ copy những file cần thiết từ bước build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./

# (Tùy chọn) Nếu có Tailwind hoặc postcss config
COPY --from=builder /app/tailwind.config.ts ./
COPY --from=builder /app/postcss.config.mjs ./

# Expose port mặc định
EXPOSE 3000

# Start Next.js app (production mode)
CMD ["npm", "start"]


# docker build -t profile-staff .

# docker save -o profile-staff.tar profile-staff