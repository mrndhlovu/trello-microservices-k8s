declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "testing"
      PORT: string
      JWT_TOKEN_SIGNATURE: string
      JWT_REFRESH_TOKEN_SIGNATURE: string
      BOARDS_MONGO_URI: string
      NATS_URL: string
      NATS_CLIENT_ID: string
      NATS_CLUSTER_ID: string
    }
  }
}