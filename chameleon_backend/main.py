from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from src.chameleon_backend.routes.downloadChameleon import router as download_chameleon_router


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],  
    allow_headers=["*"],
    allow_credentials=True, 
    expose_headers=["*"], 
)

app.include_router(download_chameleon_router)
@app.get("/")
async def hello_fly():
    return 'hello from fly.io'


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)