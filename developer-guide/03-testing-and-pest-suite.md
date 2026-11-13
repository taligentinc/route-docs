# Testing Suite & Pest PHP Best Practices

RouteApp utilizes **Pest PHP** for comprehensive automated testing across unit, feature, multi-tenant scoping, and Livewire component interactions.

---

## 🧪 Running the Test Suite

### Run All Tests Compactly:
```bash
php artisan test --compact
# Or directly via Pest:
vendor/bin/pest
```

### Run a Specific Test File:
```bash
vendor/bin/pest tests/Feature/Tenant/ChatEnhancementsTest.php
```

### Run Tests Matching a Specific Filter:
```bash
vendor/bin/pest --filter="attendance"
```

---

## 🏛️ Writing Livewire Component Tests

RouteApp uses Livewire's fluent testing helpers:

```php
use App\Livewire\Tenant\MyRoute;
use App\Models\Stop;
use App\Models\User;
use function Pest\Livewire\livewire;

test('bus captain can view stops and toggle attendance on my route', function () {
    $user = User::factory()->captain()->create();
    $stop = Stop::factory()->create();

    livewire(MyRoute::class)
        ->actingAs($user)
        ->assertSee($stop->address_line1)
        ->call('toggleRiderAttendance', $stop->riders->first()->id)
        ->assertDispatched('attendance-updated');
});
```

---

## 🎨 Code Style & Pint Formatting

Before committing PHP code changes, format code cleanly to project standards:
```bash
vendor/bin/pint --dirty --format agent
```
