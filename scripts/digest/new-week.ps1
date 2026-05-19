param(
  [Parameter(Mandatory = $true)]
  [ValidatePattern('^\d{4}-W\d{2}$')]
  [string]$Week,

  [string]$Issue = "",
  [string]$Start = "",
  [string]$End = "",
  [switch]$Force
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$templateDir = Join-Path $repoRoot "drafts\weekly\_template"
$targetDir = Join-Path $repoRoot "drafts\weekly\$Week"

if (-not (Test-Path -LiteralPath $templateDir)) {
  throw "Template folder not found: $templateDir"
}

if ((Test-Path -LiteralPath $targetDir) -and -not $Force) {
  throw "Draft folder already exists: $targetDir. Re-run with -Force to replace template files."
}

if (-not (Test-Path -LiteralPath $targetDir)) {
  New-Item -ItemType Directory -Path $targetDir | Out-Null
}

Copy-Item -Path (Join-Path $templateDir "*") -Destination $targetDir -Recurse -Force

$replacements = @{
  "__WEEK__" = $Week
  "__ISSUE__" = $Issue
  "__START__" = $Start
  "__END__" = $End
}

Get-ChildItem -Path $targetDir -Recurse -File |
  Where-Object { $_.Extension -in ".md", ".yaml", ".yml" } |
  ForEach-Object {
    $content = Get-Content -LiteralPath $_.FullName -Raw -Encoding UTF8
    foreach ($key in $replacements.Keys) {
      $content = $content.Replace($key, $replacements[$key])
    }
    Set-Content -LiteralPath $_.FullName -Value $content -Encoding UTF8
  }

Write-Host "Created weekly draft folder: $targetDir"
