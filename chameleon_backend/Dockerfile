# ────────────── Builder stage ──────────────
FROM python:3.13-slim AS builder

# 1) keep logs clean & no .pyc
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# 2) install Poetry
RUN pip install --upgrade pip \
 && pip install poetry

# 3) tell Poetry to put the venv inside your project
RUN poetry config virtualenvs.in-project true

# 4) copy lockfiles first (caching)
COPY pyproject.toml poetry.lock ./

# 5) copy your package sources so Poetry can install it
COPY src       ./src
COPY main.py   ./main.py

# 6) install deps + your package into ./.venv
RUN poetry install --no-interaction --no-ansi

# ────────────── Runtime stage ──────────────
FROM python:3.13-slim

WORKDIR /app

# 1) get the virtualenv you just built
COPY --from=builder /app/.venv /app/.venv

# 2) ensure the venv’s executables are on PATH
ENV PATH="/app/.venv/bin:$PATH"

# 3) bring in your code (package + entrypoint)
COPY --from=builder /app/src     ./src
COPY --from=builder /app/main.py ./main.py
COPY data ./data
COPY README.md ./README.md
# (and any other top-level files you need at runtime)

# 4) expose & launch
EXPOSE 8080
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
